const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')


function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMGS() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appIMGS', appIMGS)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)

module.exports = {
    appHTML,
    appCSS,
    appIMGS,
    appJS
}