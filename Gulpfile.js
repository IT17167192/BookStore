const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripts', function (cb) {
    gulp.src('app/scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('app/js'));
    cb();
});

gulp.task('watch', function () {
    gulp.watch('app/scripts/**/*.js', gulp.series('scripts'));
});
