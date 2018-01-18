const gulp = require('gulp')
const cp = require('child_process')
const gutil = require('gulp-util')
const shell = require('gulp-shell')
const imageResize = require('gulp-image-resize')
const del = require('del')
const newer = require('gulp-newer')

gulp.task('resize-images', () => {
    const front_end_images = gulp.src('assets/images/uploads/originales/*')

    front_end_images
        .pipe(newer('assets/images/medium'))
        .pipe(imageResize({
            width: 650,
            height: 485,
            crop: true,
            upscale: false,
            imageMagick: true
        }))
        .pipe(gulp.dest('assets/images/medium'))


    front_end_images
        .pipe(newer('assets/images/thumbs'))
        .pipe(imageResize({
            width: 200,
            height: 150,
            crop: true,
            upscale: false,
            imageMagick: true
        }))
        .pipe(gulp.dest('assets/images/thumbs'))
})

gulp.task('jekyll-build', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'}).on('close', done)
})

gulp.task('default', ['resize-images','jekyll-build'])
