const {src, dest, series, watch}=require('gulp')
const sass=require('gulp-sass')(require('sass'));


function buildStyles() {
    return src('./styles/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

function watchTask() {
    watch(['./styles/**/*.scss'],buildStyles);
}


exports.default=series([buildStyles,watchTask]);



