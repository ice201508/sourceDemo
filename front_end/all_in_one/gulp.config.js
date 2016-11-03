module.exports = {
	scsslint: {
		src: [
			"app/css/**/*.scss",
			"!" + "app/css/bootstrap/**/*",
			"!" + "app/css/font-awesome/**/*"
		],
		options: {}
	},
	browsersync: {
		server: {  //静态服务器，  proxy是代理
			baseDir: ["./", "./app"]   //从当前目录/app启动服务器
		}
	}
}
