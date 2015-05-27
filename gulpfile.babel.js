import gulp from 'gulp';
import eslint from 'gulp-eslint';
import postcss from 'gulp-postcss';
import use from 'postcss-use';
import rename from 'gulp-rename';

// Default

gulp.task('default', ['lint']);

// Build

gulp.task('build', () => {
  return gulp.src(['**/*.input.css'])
    .pipe(postcss([
      use({ modules: ['postcss-color-function', 'postcss-color-gray', 'postcss-color-hex-alpha',
                      'postcss-color-hwb', 'postcss-color-rebeccapurple', 'postcss-conic-gradient']})
    ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('.'));
});

// Lint

gulp.task('lint', () => {
  return gulp.src(['*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

