var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-clean-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
		.pipe(csso())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('w', ['watch']);