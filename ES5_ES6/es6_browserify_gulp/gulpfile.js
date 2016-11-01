const gulp = require("gulp");
const config = require("./gulp.config.js")();  //可以将一些配置信息，如文件地址写在外面的配置文件中，返回的一个函数，立即执行
const $ = require("gulp-load-plugins")();  //一个个加载需要的模块比较繁琐，使用这个库可以加载package.json文件中所有的gulp模块。通过plugins.的方式去加载package.json中的gulp-** 文件，不是gulp-开头的插件还是要手动加载
const browserify = require("browserify");
const source = require("vinyl-source-stream");   //将browserify的bundle()转换为gulp可用的vinyl流(虚拟文件格式流)

//var buffer = require('vinyl-buffer');  //用于将vinyl流转换为buffered binyl文件

//编译并压缩js
gulp.task("convertJS", function(){
	return gulp.src(config.js)
			.pipe($.babel({
				presets: ['es2015']  //将es6代码转换为es5
			}))
			//.pipe($.uglify())  //压缩js代码
			.pipe(gulp.dest(config.tmp_js));
});

//编译合并并压缩scss
gulp.task("convertCSS", function(){  //必须写return，这个任务是链式的
			 gulp.src(config.css)
			.pipe($.sass().on('error', $.sass.logError))  //有几个最终目录便会生成几个文件
			//.pipe($.concat())  //合并css
			//.pipe($.minifyCss({compatibility: 'ie8'})) //压缩css
			.pipe($.rename(function(path){
				path.basename += ".min"
			}))
			.pipe(gulp.dest(config.dist_css));
});

//监视文件的变化，自动执行任务
gulp.task("watch", function(){
	gulp.watch(config.css, ['convertCSS']);
	gulp.watch(config.js, ['convertJS', 'browserify']);
	gulp.watch(config.html, ['convertJS'])
})

//browerify转换cmd规范代码到浏览器识别的代码
gulp.task("browserify", function(){
	var b = browserify({   //browserify是独立的，我们需要直接使用它的API
		entries: config.tmp_js + "/es6_import.js",
		//debug: true
	});

	return b.bundle()
			.pipe(source("bundle.js"))
			//.pipe(buffer())
			.pipe(gulp.dest(config.dist_js))
})

gulp.task('default', ['convertJS', 'convertCSS', 'browserify', 'watch']);
