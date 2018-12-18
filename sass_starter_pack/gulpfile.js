const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass

gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browsersync.stream());
});
//Watch & serve 
gulp.task('serve', ['sass'], function(){
    browsersync.init({ //initializing browsersync
        server: './src' // server value will be folder we want to serve
    });
    
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browsersync.reload); // on change in the file there will be reload
});
// Default
gulp.task('default', ['serve']);