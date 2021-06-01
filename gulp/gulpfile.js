// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

//Função para compilar SASS e adicionar prefixos
function compilaSass() {
  return gulp
    .src('css/scss/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      }),
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Tarefa gulp para a função de SASS
gulp.task('sass', compilaSass);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função watch do gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch(['*.html', '*.js']).on('change', browserSync.reload);
}

// Tarefa para iniciar o watch
gulp.task('watch', watch);

// Tarefa padrão do gulp para iniciar watch e browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
