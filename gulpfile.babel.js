import gulp from 'gulp';
import eslint from 'gulp-eslint';

// Default

gulp.task('default', ['lint']);

// Lint

gulp.task('lint', () => {
  return gulp.src(['*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

