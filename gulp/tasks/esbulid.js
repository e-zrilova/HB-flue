const { src, dest } = require('gulp');
const browserSync = require('browser-sync');


const paths = require('../paths');
const esbuild = require('gulp-esbuild');

const isProduction = process.env.NODE_ENV === 'production';

const scripts = () => {
  return src(paths.scripts.src)
    .pipe(esbuild({
      outdir: '',
      format: 'iife',
      bundle: true,
      sourcemap: !isProduction,
      minify: isProduction
    }))
    .pipe(dest(paths.scripts.dist))
    .pipe(browserSync.stream())
}


module.exports = scripts;
