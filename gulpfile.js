// ここから https://qiita.com/koba08/items/6484504bd90ca6fd5b91

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const glob = require("gulp-sass-glob");
const notify = require('gulp-notify');
const plumber = require("gulp-plumber");
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify-es").default;
// const imagemin = require("gulp-imagemin");一時停止
// const mozjpeg = require("imagemin-mozjpeg");
// const pngquant = require("imagemin-pngquant");
const changed = require('gulp-changed');

const paths = {
	rootDir: "source/",
	scssSrc: "source/assets/scss/**/*.scss",
	jsSrc: "source/assets/js/*.js",
	imgSrc: "source/assets/img/**/*",
	outCss: "htdocs/assets/css",
	outJs: "htdocs/assets/js",
	outImg: "htdocs/assets/img",
};


// sass
function sassFunc() {
	return gulp.src(paths.scssSrc , {
		sourcemaps: true
	})
	.pipe(plumber({
		errorHandler: notify.onError('<%= error.message %>'),
	}))
	.pipe(glob())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(gulp.dest(paths.outCss), {
		sourcemaps: './sourcemaps'
	})
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(gulp.dest(paths.outCss), {
		sourcemaps: './sourcemaps'
	})
}

// js
function jsFunc() {
	return gulp.src(paths.jsSrc , {
	sourcemaps: true
	})
	.pipe(plumber({
	errorHandler: notify.onError('<%= error.message %>'),
	}))
	// 複数のJSを連結させるときはこれ↓
	//.pipe(concat('script.js'))

	.pipe(babel())
	.pipe(uglify({}))
	.pipe(gulp.dest(paths.outJs));
}

// img (一時停止)
// function imgFunc() {
// 	return gulp.src(paths.imgSrc)
// 	.pipe(changed(paths.outImg))
// 	.pipe(gulp.dest(paths.outImg))
// 	.pipe(imagemin(
// 	[
// 		mozjpeg({
// 		quality: 80 //画像圧縮率
// 		}),
// 		pngquant()
// 	],
// 	{
// 		verbose: true
// 	}
// 	))
// }

// watch
function watchFunc(done) {
	gulp.watch(paths.scssSrc, gulp.parallel(sassFunc));
	gulp.watch(paths.jsSrc, gulp.parallel(jsFunc));
	// 画像コンパイルの一時停止
	//gulp.watch(paths.imgSrc, gulp.parallel(imgFunc));
	done();
}

	// scripts tasks
gulp.task('default',
gulp.parallel(
	// watchFunc, sassFunc, jsFunc
	watchFunc, jsFunc
	// imgFunc停止解除したら追記
	)
);
