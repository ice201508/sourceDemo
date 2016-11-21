var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");   //抽取css的插件

module.exports = {
	entry: {
		"main": "./app.js",
		"vendor": ['./node_modules/jquery/dist/jquery.js', './node_modules/angular/angular.js'],
		"other": ['./node_modules/jquery/dist/jquery.js', './node_modules/angular/angular.js']
	},
	output: {
		path: __dirname + '/dist',
		filename: "[name].[chunkhash:8].js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: extractTextPlugin.extract("style","css")
			},   //必须下载插件用新loader去解析css，从js中分离css
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({  //内置的压缩插件
			compress: {
				warnings: false
			}
		}),
		new extractTextPlugin("[name].css"), //抽取css
		new webpack.optimize.CommonsChunkPlugin({  //这里chunks里面时要抽取公共的代码key，
			name: "vendor",
			chunks: ['vendor']
		},{
			name: "other",
			chunks: ['other']
		}),
	]
}
