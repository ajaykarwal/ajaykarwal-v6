/// <binding ProjectOpened='default' />
'use strict';

/*====================================
=            Gulp Plugins            =
====================================*/
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

/*=============================
=            Paths            =
=============================*/
var paths = {
    scripts: {
        src: 'scripts/',
        dest:  'scripts/'
    },
    styles: {
        src: 'sass/',
        dest:  'css/'
    }

};



/*=================================
 =            CSS Tasks            =
 =================================*/
gulp.task('sass', function () {
    return gulp.src(paths.styles.src + '**/*.scss')

    // Compile Sass files to Default.css
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 1%', 'IE 6'], cascade: true }))
    .pipe(gulp.dest(paths.styles.dest))

    // Minify and save as Default.min.css
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))

    .pipe(gulp.dest(paths.styles.dest));
});



/*========================================
=            JavaScript Tasks            =
========================================*/

// Concat and Minify
gulp.task('scripts', function () {
    return gulp.src(paths.scripts.src + 'main.js')
    .pipe(uglify({ debug: true }, function (file) {
        console.log(file.name + ': ' + file.stats.originalSize);
        console.log(file.name + ': ' + file.stats.minifiedSize);
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
});


// Run the default tasks on launch and then watch.
gulp.task('default', ['sass', 'scripts', 'watch']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.styles.src + '**/*.scss', ['sass']);
    gulp.watch(paths.scripts.src + '**/*.js', ['scripts']);
});
