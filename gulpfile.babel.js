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
                      'postcss-color-hwb', 'postcss-color-rebeccapurple', 'postcss-conic-gradient',
                      'postcss-color-rgba-fallback', 'postcss-color-hcl']})
    ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('build-separate', ['postcss-color-function', 'postcss-color-gray', 'postcss-color-hex-alpha',
                             'postcss-color-hwb', 'postcss-color-rebeccapurple', 'postcss-conic-gradient',
                             'postcss-color-rgba-fallback', 'postcss-color-hcl'])

// Build functions for each plugin independently

gulp.task('postcss-color-function', () => {
  return gulp.src('postcss-color-function/style.input.css')
    .pipe(postcss([ require('postcss-color-function')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-function'));
});

gulp.task('postcss-color-gray', () => {
  return gulp.src('postcss-color-gray/style.input.css')
    .pipe(postcss([ require('postcss-color-gray')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-gray'));
});

gulp.task('postcss-color-hex-alpha', () => {
  return gulp.src('postcss-color-hex-alpha/style.input.css')
    .pipe(postcss([ require('postcss-color-hex-alpha')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-hex-alpha'));
});

gulp.task('postcss-color-hwb', () => {
  return gulp.src('postcss-color-hwb/style.input.css')
    .pipe(postcss([ require('postcss-color-hwb')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-hwb'));
});

gulp.task('postcss-color-rebeccapurple', () => {
  return gulp.src('postcss-color-rebeccapurple/style.input.css')
    .pipe(postcss([ require('postcss-color-rebeccapurple')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-rebeccapurple'));
});

gulp.task('postcss-conic-gradient', () => {
  return gulp.src('postcss-conic-gradient/style.input.css')
    .pipe(postcss([ require('postcss-conic-gradient')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-conic-gradient'));
});

gulp.task('postcss-color-rgba-fallback', () => {
  return gulp.src('postcss-color-rgba-fallback/style.input.css')
    .pipe(postcss([ require('postcss-color-rbga-fallback')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-rbga-fallback'));
});

gulp.task('postcss-color-hcl', () => {
  return gulp.src('postcss-color-hcl/style.input.css')
    .pipe(postcss([ require('postcss-color-hcl')() ]))
    .pipe(rename(path => {
      path.basename = path.basename.replace('.input', '');
      path.extname = '.out.css';
    }))
    .pipe(gulp.dest('./postcss-color-hcl'));
});

// Lint

gulp.task('lint', () => {
  return gulp.src(['*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

