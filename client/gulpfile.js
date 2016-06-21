'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserifyTask = require('gulp-typescript-browserify'),
    typings = require("gulp-typings");

var targetDir = __dirname + '/dist';

var bundleConfigs = [{
  entries: './src/main.tsx',
  dest: targetDir+"/js",
}];

gulp.task('html', function () {
    return gulp.src('./html/*.html')
           .pipe(gulp.dest(targetDir));
});

gulp.task('typings', function(){
    return gulp.src('./typings.json')
        .pipe(typings());
});

gulp.task('scripts', ['typings'], browserifyTask(bundleConfigs));

gulp.task('all', ['html', 'scripts']);
gulp.task('default', ['all']);
