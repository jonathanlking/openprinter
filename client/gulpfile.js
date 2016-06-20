'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

var targetDir = __dirname + '/dist';

gulp.task('html', function () {
    return gulp.src('./html/*.{html,tmpl}')
           .pipe(gulp.dest(targetDir));
});

gulp.task('all', ['html']);
gulp.task('default', ['all']);
