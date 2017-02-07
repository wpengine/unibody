var gulp      = require('gulp'); // core gulp
var sass = require('gulp-sass'); // compile scss

gulp.task('sass', function () {
  return gulp.src('./src/scss/wpe/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('default', function() {

});