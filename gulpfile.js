const gulp = require("gulp");
const browserSync = require("browser-sync");
const ssi = require("connect-ssi");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const glob = require("gulp-sass-glob");
const notify = require('gulp-notify');
const plumber = require("gulp-plumber");
const babel = require('gulp-babel');
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require('gulp-changed');

const paths = {
	rootDir: "htdocs/",
	scssSrc: "htdocs/assets/scss/**/*.scss",
	jsSrc: "htdocs/assets/js/**/*.js",
	imgSrc: "htdocs/assets/img/**/*",
	outCss: "htdocs/assets/css",
	outJs: "htdocs/assets/js",
	outImg: "htdocs/assets/",
};

// browser sync
function browserSyncFunc(done){
	browserSync.init({
		server: {
			baseDir: paths.rootDir,
			middleware: [
			ssi({
				baseDir: paths.rootDir,
				notify: false, //通知
				ext: ".html"
			})
			]
		},
		port: 4000,
		reloadOnRestart: true
	});
	done();
}

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
		browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
		cascade: false
	}))
	.pipe(gulp.dest(paths.outCss), {
		sourcemaps: './sourcemaps'
	})
	.pipe(browserSync.stream());
}

// js
function jsFunc() {
	return gulp.src(paths.jsSrc , {
	sourcemaps: true
	})
	.pipe(plumber({
	errorHandler: notify.onError('<%= error.message %>'),
	}))
	.pipe(babel())
	.pipe(uglify({}))
	.pipe(gulp.dest(paths.outJs));
}

// img
function imgFunc() {
	return gulp.src(paths.imgSrc)
	.pipe(changed(paths.outImg))
	.pipe(gulp.dest(paths.outImg))
	.pipe(imagemin(
	[
		mozjpeg({
		quality: 80 //画像圧縮率
		}),
		pngquant()
	],
	{
		verbose: true
	}
	))
}

// watch
function watchFunc(done) {
	gulp.watch(paths.scssSrc, gulp.parallel(sassFunc));
	gulp.watch(paths.jsSrc, gulp.parallel(jsFunc));
	gulp.watch(paths.imgSrc, gulp.parallel(imgFunc));
	done();
}

	// scripts tasks
gulp.task('default',
gulp.parallel(
	browserSyncFunc, watchFunc, sassFunc, jsFunc,imgFunc
	)
);
