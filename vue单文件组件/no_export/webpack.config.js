// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
// 	entry: './main.js',
// 	output: {
// 		path: path.join(__dirname, '/dist/'),
// 		filename: 'build.js'
// 	},
// 	modules: {
// 		loaders: [
// 			{
// 				test: /\.vue$/,
// 				loader: 'vue-loader'
// 			},
// 			{
// 				test: /\.js$/,
// 				loader: 'babel-loader',
// 				exclude: /node_modules/,
// 				query: {
// 					presets: ['es2015']
// 				}
// 			}
// 		]
// 	},
// 	devServer: {
// 		historyApiFallback: true,
// 		noInfo: true
// 	},
// }

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}
