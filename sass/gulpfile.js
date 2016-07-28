'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
	//return gulp.src('uii/**/*.scss')
	//return gulp.src(['uii/**/*.scss', '!uii/ui.scss'])
	return gulp.src('ui/ui.scss')
		.pipe(sourcemaps.init())
		//.pipe(sass())
		//.pipe(sass.sync())
		.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist'));
});