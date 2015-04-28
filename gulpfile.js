var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({lazy:true});
var browserSync = require('browser-sync');
var nib         = require('nib');
var jeet        = require('jeet');
var clean       = require('del');

gulp.task('server', function(){
  browserSync({
    server:{
      baseDir: "./build/"
    }
  })
});

gulp.task('style', function(){
  return gulp
    .src('./src/styles/styles.styl')
    .pipe($.sourcemaps.init())
    .pipe($.stylus({
      compress:true,
      use: [nib(),jeet()]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe($.livereload())
});

gulp.task('jade', function(){
  return gulp
    .src('./src/*.jade')
    .pipe($.jade())
    .pipe(gulp.dest('./build'))
    .pipe($.livereload())
});

gulp.task('clean', function(){
  clean('./build', {read:false})
});

gulp.task('copy', function(){
  gulp
    .src('./src/scripts/*.js')
    .pipe(gulp.dest('./build/js/'))
    .pipe($.livereload());           
  gulp
    .src('./src/styles/*.css')
    .pipe(gulp.dest('./build/css/')) ;
  gulp
    .src('./src/images/**/*')
    .pipe(gulp.dest('./build/img/'));
});

gulp.task('default', function(){
  console.log('Building, watching and starting server...');
  gulp.start('jade', 'style', 'copy','server', 'watch');
});

gulp.task('watch', function(){
  $.livereload.listen();
  gulp.watch('./src/*.jade', ['jade']);
  gulp.watch('./src/styles/*.styl', ['style']);
  gulp.watch('./src/scripts/*.js', ['copy']);
});

gulp.task('build', function(){
  gulp.start('jade', 'style', 'copy');
  console.log('Your files have been built, thanks!');
});
