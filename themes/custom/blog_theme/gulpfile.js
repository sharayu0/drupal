const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

    gulp.task('message', async function () {
    return console.log('gulp is running..');
    });

    gulp.task('sass', function () {
            return gulp.src('src/sass/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('dest/css/'));
        });

    gulp.task('watch', function () {
        gulp.watch('src/sass/*.scss', gulp.series('sass'));
            
        });

