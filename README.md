# gulp-cssmin

minify css using gulp.

## Install

Install with [npm](https://npmjs.org/package/gulp-cssmin)

```
npm install --save-dev gulp-cssmin
```


## Example

```js
var gulp = require('gulp');
var imagemin = require('gulp-cssmin');

gulp.task('default', function () {
	gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
});
```


## API

### cssmin(options)

See the css-min [options](https://github.com/GoalSmashers/clean-css).

## Inspired by

- https://github.com/sindresorhus/gulp-imagemin

- https://github.com/gruntjs/grunt-contrib-cssmin

## License

MIT [@chilijung](http://github.com/chilijung)
