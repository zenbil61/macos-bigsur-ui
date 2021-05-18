/* eslint-disable @typescript-eslint/no-var-requires */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return (
        gulp
            .src(['components/**/*.scss', '!components/styles'])
            .pipe(gulp.dest('lib'))
            .pipe(gulp.dest('esm'))
            // .pipe(sassGlob())
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(autoprefixer({ cascade: false }))
            .pipe(gulp.dest('lib'))
            .pipe(gulp.dest('esm'))
    );
});
