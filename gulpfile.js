/**
 * Some sweet gulp action,
 * 'cause who doesn't like burgers
 * and shakes together, yeah?
 */

// Include dependancies
var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries'),
    docs = require('sassdoc')
;

// Define static assets
var
    root = './src/public/',
    assets = {
        styles: root + 'styles/',
        docs: root + 'docs'
    }
;

// Docs
gulp.task('docs', function () {
    docs(
        assets.styles + 'sass',
        {
            dest : assets.docs
        }
    );
});

// Styles
gulp.task('styles', function () {
  gulp.src(assets.styles + 'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(assets.styles));
});

// Watch
gulp.task('watch',function(){
    gulp.watch(assets.styles + 'sass/**/*.scss',['styles']);
});

// Default
gulp.task('default', [
    'styles',
    'docs',
    'watch'
]);
