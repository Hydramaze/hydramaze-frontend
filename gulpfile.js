'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  path = require('path'),
  $ = require('gulp-load-plugins')();
 
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: '9000',
    livereload: true,
    middleware: function(connect) {
        return [
          connect()
          .use('/bower_components', connect.static('bower_components'))
          .use('/tmp', connect.static('tmp'))
        ];
    }
  });
});

// Task used to reload all html files
gulp.task('html', function () {
  gulp.src('./src/**/*.html')
    .pipe(connect.reload());
});

// Task used to reload all css files
gulp.task('style', function () {
  gulp.src('./src/assets/style/**/*.less')
    .pipe($.less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./tmp/assets/css'))
    .pipe(connect.reload());
});

// Task used to reload all css files
gulp.task('scripts', function () {
  gulp.src(['./src/app/**/*.js',
            './src/assets/js/*.js'])
    .pipe(connect.reload());
});

// Watch all files and reload when any change occurs
gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html']);
  gulp.watch(['./src/assets/style/**/*.less'], ['style']);
  gulp.watch(['./src/app/**/*.js', './src/assets/js/*.js'], ['scripts']);
});
 
gulp.task('initialization', function() {
  gulp.start('html');
  gulp.start('style');
  gulp.start('scripts');
});

gulp.task('start', ['connect', 'initialization', 'watch']);