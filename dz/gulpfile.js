var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('do-it', () =>
    gulp.src('js/app.js')
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'))
);


