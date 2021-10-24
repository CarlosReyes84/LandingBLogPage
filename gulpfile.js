const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');

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
function js() {
    return src('src/app.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: true }))
}

function watching() {
    watch('src/sass/**/*.scss', compile),
    watch('src/app.js', js)
}
exports.default = watching;