let gulp = require('gulp');
let concat = require('gulp-concat');
let less = require('gulp-less');
let uglify = require('gulp-uglify');
let fs = require('fs');

let isProduction = process.env.NODE_ENV === 'production';
let conf = JSON.parse(fs.readFileSync('./src/config.json'));
conf.IS_DEV = !isProduction;
fs.writeFileSync('./src/config.json', JSON.stringify(conf, null, '  '));

console.log("isProduction: ", isProduction);

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', function () {
  gulp.src('src/assets/*', {base:'./src'})
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('src/less/*.*')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'assets', 'css']);
gulp.task('build', ['default']);
