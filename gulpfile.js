var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

var paths = {
  src: {
    less: './src/style/less/*.less',
    css: './src/style/css/*.css',
    theme: './src/style/css/themes/***',
    js: './src/js/**',
    pug: './src/pug/*.pug',
    images: './src/img/*',
    data: './src/data/*',
    font: './src/font/*'
  },
  dest: {
    html: './dest',
    css: './dest/style',
    theme: './src/style/themes',
    js: './dest/js',
    images: './dest/img',
    data: './dest/data',
    font: './dest/font'
  }
}

gulp.task('pug', function () {
  gulp.src(paths.src.pug)
    .pipe($.pug())
    .pipe(gulp.dest('./dest'))
})

gulp.task('less', function () {
  gulp.src(paths.src.less)
    .pipe($.less())
    .pipe(gulp.dest(paths.dest.css))
})
gulp.task('css', function () {
  gulp.src(paths.src.css)
    .pipe(gulp.dest(paths.dest.css))
})

gulp.task('scripts', function () {
  gulp.src(paths.src.js)
    // .pipe($.uglify())
    .pipe(gulp.dest(paths.dest.js))
})

gulp.task('images', function () {
  gulp.src(paths.src.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dest.images))
})

gulp.task('font', function () {
  gulp.src(paths.src.font)
    .pipe(gulp.dest(paths.dest.font))
})

gulp.task('data', function () {
  gulp.src(paths.src.data)
    .pipe(gulp.dest(paths.dest.data))
})

gulp.task('theme', function () {
  gulp.src(paths.src.theme)
    .pipe(gulp.dest(paths.dest.theme))
})

gulp.task('webserver', function () {
  gulp
    .src(paths.dest.html)
    .pipe($.webserver({
      port: 8080,
      livereload: true,
      directoryListing: false
    }))
})

gulp.task('watch', function () {
  gulp.watch(paths.src.pug, ['pug'])
  gulp.watch(paths.src.less, ['less'])
  gulp.watch(paths.src.js, ['scripts'])
})

gulp.task('default', ['webserver', 'watch'])
gulp.task('build', ['pug', 'less', 'css', 'theme', 'scripts', 'data', 'font'])
