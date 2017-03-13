'use strict'

const gulp      = require('gulp')
,     watch     = require('gulp-watch')
,     ejs       = require('gulp-ejs')
,     s3        = require('gulp-s3')
,     awsConfig = require('./awsconfig.js')

gulp.task('deploy', () => {
  // Deploy files without extension name as html
  gulp.src(['./dist/**/*', '!./dist/**/*.*'])
    .pipe(s3(awsConfig,{ headers: {'Content-Type': 'text/html' } }))

  // Deploy all other files
  gulp.src(['./dist/**/*.*'])
    .pipe(s3(awsConfig))
})

gulp.task('build', () => {
  // Compile ejs to dist without extension (for AWS)
  gulp.src('./src/views/*.ejs')
    .pipe(ejs({}, {}, { ext: '' }))
    .pipe(gulp.dest('./dist'))

  // Compile ejs to dist with html extension (for local server)
  gulp.src('./src/views/*.ejs')
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('./dist'))

  // Copy other files to dist
  gulp.src('./src/**/*.*')
    .pipe(gulp.dest('./dist'))
})


gulp.task('watch', function () {
  return gulp.watch(['src/**/*.*'], ['build'])
})
