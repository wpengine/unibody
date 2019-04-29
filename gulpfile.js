// Variables
var fractal = "node_modules/@frctl/fractal/bin/fractal";

// Package variables
var gulp = require( 'gulp' ); // core gulp
var sass = require( 'gulp-sass' ); // compile scss
var ghPages = require( 'gulp-gh-pages' ); // deploy to github pages
var shell = require( 'gulp-shell' ); // allows shell commands

//
// Tasks
//

// Compile scss
gulp.task( 'sass', function () {
	return gulp.src( './style.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( './public/css/' ) );
} );

// Run fractal's built-in build command
gulp.task( 'build', shell.task( [
	fractal + ' build'
] ) );

// Deploy site to GitHub pages
gulp.task( 'gh-pages', function () {
	return gulp.src( './build/**/*' )
		.pipe( shell( [] ) )
		.pipe( ghPages() );
} );

// Run fractal server
gulp.task( 'watch', shell.task( [
	fractal + ' start --sync --watch'
] ) );

//
// Gulp sequential tasks
//
gulp.task( 'serve', gulp.series( 'sass', 'watch' ) );
gulp.task( 'deploy', gulp.series( 'sass', 'build', 'gh-pages' ) );
