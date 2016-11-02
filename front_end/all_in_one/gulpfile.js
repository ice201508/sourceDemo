const gulp = require("gulp");
const config = require("./gulp.config.js");
const $ = require("gulp-load-plugins")();
const del = require("del");

gulp.task("scsslint", function(){
	return gulp.src([
				"app/css/**/*.scss",  // *.{sass | scss}
				"!" + "app/css/bootstrap/**/*",
				"!" + "app/css/font-awesome/**/*"
			])
			.pipe($.scssLint({
				'config': "lint.yml",
				'bundleExec': false
			}))
})

gulp.task("sass", ["clean"], function(){
	return gulp.src("./app/css/**/*.scss")   //src也可以写 '/scss/**/*.{sass,scss}'
			.pipe($.sass().on("error", $.sass.logError))  //这里会生成3个css文件
			.pipe($.autoprefixer())  //必须在sass编译之后，且不能加参数不然报错
			.pipe(gulp.dest("./.tmp/css/"))  // 保存未压缩的文件到指定的目录下
			.pipe($.concat({  //合并后的文件名，也可以直接写 $.concat("build.css")
				path: "build.css"
			}))
			.pipe($.rev())  //文件名添加md5后缀
			.pipe(gulp.dest("./.tmp"))  //保存合并但未压缩的文件到./tmp
			.pipe($.rename({suffix: ".min"}))
			.pipe($.sourcemaps.init())  //压缩的文件中才需要sourcemaps,在index.html中使用min.css调试可以看见具体样式位置
			.pipe($.cleanCss({compatibility: "ie8"}))
			.pipe($.sourcemaps.write())
			.pipe(gulp.dest("./dist/css"));
})

gulp.task("clean", function(){
	del(["./dist", "./.tmp"]);  //del(['tmp/*.js', '!tmp/unicorn.js']).then(...)  删除一个文件夹除了一个文件
})

gulp.task('index', function(){
	var target = gulp.src("app/index.html");
	var sources = gulp.src("./dist/css/*.css", {read: false});
	return target.pipe($.inject(sources, {relative: true}))  //将sources中的css全部注入到target中 relative保证了我们可以去除根目录的dist/
			.pipe(gulp.dest("./dist"));
})
