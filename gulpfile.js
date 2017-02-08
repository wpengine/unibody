// Variables
var fractal = "node_modules/@frctl/fractal/bin/fractal";

// Package variables
var gulp      = require('gulp'); // core gulp
var sass = require('gulp-sass'); // compile scss
var ghPages = require('gulp-gh-pages'); // deploy to github pages
var shell = require('gulp-shell'); // allows shell commands
var git = require('gulp-git');
var svg2png = require('gulp-svg2png');

//
// Tasks
//

// Compile scss
gulp.task('sass', function () {
	return gulp.src('./src/scss/wpe/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

// Run fractal's built-in build command
gulp.task('build', shell.task([
	fractal + ' build'
]));

// Deploy site to GitHub pages
gulp.task('gh-pages', function() {
	return gulp.src('./build/**/*')
		.pipe(shell([
			]))
		.pipe(ghPages());
});

// Run fractal server
gulp.task('watch', shell.task([
	fractal + ' start --sync --watch'
]));

// Clone remote repo to sub folder ($CWD/sub/folder/git-test)
gulp.task('get-svg-icons', function() {
	git.clone('git@github.com:wpengine/wpengine-svg-icons.git', {args: './vendor/wpengine-svg-icons'}, function(err) {
		// handle err
	});
	gulp.src("vendor/wpengine-svg-icons/assets/svg/*.svg")
			.pipe(gulp.dest('./public/img/svg-icons'));
});

gulp.task('svg2png', function () {
	gulp.src('./vendor/wpengine-svg-icons/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./public/img/png-icons'));
});

//
// Gulp sequential tasks
//
gulp.task('serve', ['sass', 'get-svg-icons', 'watch']);
gulp.task('deploy', ['sass', 'build', 'gh-pages']);
