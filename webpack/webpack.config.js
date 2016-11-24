var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "[name]-[hash].js",
	},

	resolve: {
		alias: {
			'react': pathToReact
		}
	}

	module: {
		noParse: [pathToReact],
		loaders: [
			{
				test: /\.json$/,
				loader: "json",  // 实为json-loader
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			/* 可以放在外面单独的配置文件中
				query: {
					presets: ['es2015', 'react']
				}
			*/
			}, {
				test: /\.css$/,
				//loader: 'style!css'
				loader: ExtractTextPlugin.extract('style', 'css')
			}
		]
	},

	plugins: [
		new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: "body",
			favicon: 'img/favicon.ico',
			hash:  false,
			template: __dirname + "/app/index.tmp.html"
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),  //压缩js
		new ExtractTextPlugin('[name].[hash].css')
	],

	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录, 默认当前目录
		port: 9000,  //默认8080
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	}
}
