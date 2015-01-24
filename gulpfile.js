'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy(options));
});