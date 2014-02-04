'use strict';
var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var cssmin = require('./index');

it('should minify css', function (cb) {
	var stream = cssmin();

	stream.on('data', function (file) {
		// assert(file.contents.length < fs.statSync('fixture.png').size);
		cb();
	});

	stream.write(new gutil.File({
		path: __dirname + '/sample/test.css',
		contents: fs.readFileSync(__dirname + '/sample/test.css')
	}));
});

// it('should skip unsupported css', function (cb) {
// 	var stream = cssmin();

// 	stream.on('data', function (file) {
// 		assert.strictEqual(file.contents, null);
// 		cb();
// 	});

// 	stream.write(new gutil.File({
// 		path: __dirname + '/fixture.bmp'
// 	}));
// });
