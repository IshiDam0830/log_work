var gulp          = require('gulp');
var postcss       = require('gulp-postcss');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('autoprefixer')
var sass          = require('gulp-sass');
var minimist      = require('minimist');
var browserSync   = require('browser-sync').create();
var plumber       = require('gulp-plumber');
var stylelint     = require('stylelint');
var postcssScss   = require('postcss-scss');
var postcssReporter = require('postcss-reporter');
var watch         = require('gulp-watch');

var pathObj = {
    changedScssSrc:'',
    changedScssDir:'',
    parentScssSrc:'',
    destDir:''
};

var isProcess = false;
/*

  SCSSの整形

  ・ plumber() => コンパイル中のエラーが発生してもタスクが止まらないようにする
  ・ postcss() => CSSを変換するツール
  ・ stylelint({fix: true}) => SCSSファイルを自動フォーマット（ルールは .stylelintrc.js に記載）
  ・ postcssReporter({clearAllMessages: true})] => ターミナルに出るエラーを見やすく整形。
     => 整形前のみずらいメッセージはクリアする（{clearAllMessages: true}）
  ・ {syntax: postcssScss} => 整形にはSCSS文法を使用
  ・ gulp.dest(path) => 整形されたSCSSを保存

*/
gulp.task('scssFormat', function() {
  return gulp.src(pathObj.changedScssSrc)
    .pipe(plumber())
    .pipe(postcss([
      stylelint({fix: true}),
      postcssReporter({clearAllMessages: true})],
      {syntax: postcssScss})
    )
    .pipe(gulp.dest(pathObj.changedScssDir));
});

/*

  整形後のSCSSをCSSにコンパイル

  ・ plumber() => コンパイル中のエラーが発生してもタスクが止まらないようにする
  ・ sourcemaps.init() => ソースマップ準備
  ・ sass({outputStyle: 'compressed'} => SCSSをCSSにコンパイルして圧縮
  ・ 'error', sass.logError => SCSSコンパイルのエラー出力
  ・ postcss() => CSSを変換するツール
  ・ autoprefixer({browsers: ['last 2 version']}) => ベンダープレフィックスをCSSに自動付与
  ・ sourcemaps.write('.') => ソースマップを出力
  ・ gulp.dest(path) => コンパイルされたCSSを保存

*/
gulp.task('scss',['scssFormat'], function() {
  isProcess = true;
  return gulp.src(pathObj.parentScssSrc)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', function(e) {
      console.log('エラー : '+e.line+' '+ e.file);
    })
    .pipe(postcss([
        autoprefixer({
            browsers: ['last 2 version']
          }
        )
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(pathObj.destDir));
});

/*

  ブラウザの自動更新

  ・ proxy => 自動更新したいURLを gulp watch と一緒に設定。オプションには "--proxy" を使用
              例）gulp watch --proxy css.regulation.com.local:58075
  ・ files => 変更を監視するファイルを記載（ ! から始まるファイルは監視対象外）

*/
gulp.task('browserSyncInit', function() {
    var argv = minimist(process.argv.slice(2));
    if(argv.proxy != undefined && argv.proxy !=true){
      browserSync.init({
        proxy :argv.proxy,
        files: ["./**/*.{html,php,scss,css,js,png,jpg}","!./**/gulpfile.js"]
     });
    }
});

/*

  監視開始

  ・ gulp watch で登録されているタスクを実行
  ・ browserSyncInit が最初に実行される
  ・ eventObj.path = event.path; => 変更があったファイルのパスを変更毎に一時保存

*/

gulp.task('watch',['browserSyncInit'], function(e) {
     return watch('htdocs/**/*.scss',{ ignoreInitial: true },function(){isProcess = false;})
      .on('change',function(file){
        pathObj.changedScssSrc = file;
        if(file.indexOf('\\') >= 0) {
          pathObj.changedScssDir = file.substr(0,file.lastIndexOf('\\'));
          pathObj.destDir = file.split('\\scss')[0] + '\\css';
          pathObj.parentScssSrc = file.split('\\scss')[0] + '\\scss\\*.scss';
        } else {
          pathObj.changedScssDir = file.substr(0,file.lastIndexOf('/'));
          pathObj.destDir = file.split('/scss')[0] + '/css';
          pathObj.parentScssSrc = file.split('/scss')[0] + '/scss/*.scss';
        }

        if(isProcess == false){
          gulp.start('scss');
        }

      })
      .on('add',function(file){
        console.log('追加 : ' + file);
      })
      .on('unlink',function(file){
        console.log('削除 : ' + file);
      });

});
