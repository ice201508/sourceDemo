const gulp = require("gulp");
const config = require("./gulp.config.js");
const $ = require("gulp-load-plugins")();
const del = require("del");
const browsersync = require("browser-sync").create();
const reload = browsersync.reload;

gulp.task("scsslint", function(){
	return gulp.src([
				"app/css/**/*.scss",  // *.{sass | scss}
				"!" + "app/css/bootstrap/**/*",
				"!" + "app/css/font-awesome/**/*"
			])
			.pipe($.scssLint({   //使用前先 gem install sass_lint
				'config': "lint.yml",  //不加这个配置会默认调用一个lint.yml文件
				'bundleExec': false
			}))
})

gulp.task("sass", function(){   //所有数组中的任务都会在sass之前执行
	return gulp.src("./css/**/*.scss")   //src也可以写 '/scss/**/*.{sass,scss}'
			.pipe($.sass().on("error", $.sass.logError))  //这里会生成3个css文件
			//.pipe($.autoprefixer())  //必须在sass编译之后，且不能加参数不然报错
			.pipe(gulp.dest("./.tmp/css/"))  // 保存未压缩的文件到指定的目录下
			.pipe($.order([
				"bootstrap.css",
				"ui.css",
				"main.css"
			]))
			.pipe($.concat("build.css",{
				inlineImports: false
			}))   //合并后的文件名，也可以直接写 $.concat("build.css")
			//.pipe($.rev())  //文件名添加md5后缀
			.pipe(gulp.dest("./.tmp"))  //保存合并但未压缩的文件到./tmp
			.pipe($.rename({suffix: ".min"}))
			.pipe($.sourcemaps.init())  //压缩的文件中才需要sourcemaps,在index.html中使用min.css调试可以看见具体样式位置
			.pipe($.cleanCss({compatibility: "ie9+"}))
			.pipe($.sourcemaps.write())
			.pipe(gulp.dest("./dist/css"))
			.pipe(reload({stream: true}));  //scss编译后的css注入到浏览器里实现更新
});

gulp.task("convertjs", function(){
	return gulp.src("app/index.html")
			.pipe($.if("*.css", $.cleanCss({compatibility: "ie8"})))
			.pipe($.if("*.js", $.uglify()))
			.pipe($.useref())
			.pipe(gulp.dest("./dist/"));
});

gulp.task("clean", function(){
	del(["./dist", "./.tmp"]);  //del(['tmp/*.js', '!tmp/unicorn.js']).then(...)  删除一个文件夹除了一个文件
})

gulp.task('inject', function(){
	var target = gulp.src("app/index.html");
	var sources = gulp.src(["./dist/css/*.css"], {read: false});   //不必加["./dist/css/*.css", "./dist/js/*.js"]
	return target.pipe($.inject(sources, {relative: true}))  //将sources中的css,js全部注入到target中 relative保证了我们可以去除根目录的dist/
			.pipe(gulp.dest("./dist"));
})

gulp.task("browser", function(){
	gulp.watch("./app/css/**/*.scss", ['sass']);
	gulp.watch("./app/*.html").on("change", reload);
	gulp.watch("./app/js/**/*.js", reload);

	// browsersync.init(config.browsersync)
	browsersync.init({
		server: {
			baseDir: "/dist"
		}
	})
})
