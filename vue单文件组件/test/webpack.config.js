var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	entry: path.join(__dirname, './main.js'),
	output: {
		path: path.join(__dirname, "/dist"),
		filename: 'build.js'
	},
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']}}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: "body",
			hash:  false,
			template: __dirname + "/index.tmp.html"
		})
	],
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
      'vue$': 'vue/dist/vue'
    }
	},
	devServer: {
		//hot: true;
		historyApiFallback: true,
	},
	devtool: '#eval-source-map'
}
