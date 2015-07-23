
'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');


// Connect
gulp.task('connect', function() {
	connect.server({
		root: 'dist',
		port: 8001,
		livereload: true
	});
});


// Define default task
gulp.task('default', ['connect']);