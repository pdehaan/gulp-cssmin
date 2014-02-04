var gulp = require('gulp');
var cssmin = require('./');

gulp.task('default', function () {
    gulp.src('./sample/test.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
});
