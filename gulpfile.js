/**
 * Some sweet gulp action,
 * 'cause who doesn't like burgers
 * and shakes together, yeah?
 */

// Include dependancies
var
    gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries')
;

// Define static assets
var
    root = 'public/',
    assets = {
        styles: root + '/styles/'
    }
;

// Styles
gulp.task('styles', function(){
    return sass(assets.styles + 'sass/',{
        style: 'compressed',
        noCache: true
    })
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(cmq({
        log: true
    }))
    .pipe(gulp.dest(assets.styles));
});

// Watch
gulp.task('watch',function(){
    gulp.watch(assets.styles + 'sass/**/*.scss',['styles']);
});

// Default
gulp.task('default', [
    'styles',
    'watch'
]);
