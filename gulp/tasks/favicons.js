const { src, dest } = require('gulp');
const through = require('through2');
const favicons = require('gulp-favicons');
const { paths } = require('../config');
const favicons = () => {
  return (

    src(paths.favicons.src)
      .pipe(dest(paths.favicons.dist))
      .pipe(browserSync.stream())
      .pipe(favicons({
        settings: { background: '#1d1d1d', vinylMode: true }
      }, function (code) {
        console.log(code);
      }))
      .pipe(through.obj(function (file, enc, cb) {
        console.log(file.path);
        this.push(file);
        cb();
      }))
      .pipe(gulp.dest('dist/favicons/'))
  )
}

module.exports = favicons;
