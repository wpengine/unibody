var gulp      = require('gulp'); // core gulp
var gulp-sass = require('gulp-sass'); // compile scss

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/main.css'));
});

gulp.task('default', function() {

});