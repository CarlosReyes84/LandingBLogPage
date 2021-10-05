const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

//css tasks
function minify() {
    
    return src('src/sass/app.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: true }))
}

function compile() {
    return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

//js tasks todo

function watching() {
    watch('src/sass/**/*.scss', compile)
}

exports.default = watching;