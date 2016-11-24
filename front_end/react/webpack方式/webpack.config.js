module.exports = {
	entry: './app/main.js',
	output: {
		path: './app',
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react','es2015']
				}
			}
		]
	},
	devServer: {
		inline: true,
		hot: true
	}
}
