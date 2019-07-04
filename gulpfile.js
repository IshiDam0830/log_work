const gulp          = require('gulp');
const postcss       = require('gulp-postcss');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");
const sass          = require('gulp-sass');
const minimist      = require('minimist');
const plumber       = require('gulp-plumber');
const stylelint     = require('stylelint');
const postcssScss   = require('postcss-scss');
const postcssReporter = require('postcss-reporter');
const watch         = require('gulp-watch');

var isProcess = false;

var pathObj = {
	changedScssSrc:'htdocs/assets/scss/_reset.scss',
	changedScssDir:'htdocs/assets/scss/',
	parentScssSrc:'',
	destDir:''
};


// scssを整形
function scssFormat(){
	return gulp.src(pathObj.changedScssSrc)
	.pipe(plumber())
	.pipe(postcss([
	  stylelint({fix: true}),
	  postcssReporter({clearAllMessages: true})],
	  {syntax: postcssScss})
	)
	.pipe(gulp.dest(pathObj.changedScssDir));
}

// scssコンパイル
function scssCompile(){

}

function scss(){

}

exports.scssFormat = scssFormat;
//exports.scss = series(scssFormat, scssCompile);
//exports.default = parallel(scss);