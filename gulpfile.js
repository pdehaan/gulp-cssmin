var gulp = require('gulp');
var cssmin = require('./');

gulp.task('default', function () {
    gulp.src('./sample/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./sample/dist'));
});
