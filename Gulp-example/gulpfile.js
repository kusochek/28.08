const gulp = require('gulp');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');

gulp.task('build', () => {
  return browserify({
    entries: './src/index.js',
    debug: false
  })
  .transform('babelify', { presets: ['@babel/preset-env'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./dist'))
})

gulp.task('default', gulp.series('build'));