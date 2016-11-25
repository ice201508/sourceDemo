var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './app/main.js',
	output: {
		path: './dist',
		filename: 'index-[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'app'),
				loader: 'babel',
				query: {
					presets: ['react','es2015']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'body',
			hash: false,
			template: __dirname + '/index.tmp.html'
		})
	],
	devServer: {
		inline: true,
		hot: true,
		historyApiFallback: true,
		progress: true
	}
}
