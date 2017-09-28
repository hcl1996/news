const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

// 创建一个连接服务器的任务
gulp.task('server',['sass'],function(){
    connect.server({
        root:'./',
        port:'9888',
        livereload:true
    })
    gulp.watch(['index.html','js/*.js','dist/style.css'],['html']);
    gulp.watch(['./scss/*.scss'],['sass'])
})
gulp.task('html',function(){
    gulp.src('index.html')
    .pipe(connect.reload())
    
})
gulp.task('sass',function(){
    gulp.src('./scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist'));
    
})
