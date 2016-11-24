var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [ 
	'react/dist/react.min.js',
	'react-router/dist/react-router.min.js',
	'moment/min/moment.min.js'
];
var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
	resolve: {
		alias: {}
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		noParse: [],
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		},{ 
			test: /\.(png|jpg)$/, 
			loader: 'url?limit=25000' 
		}]
	}
};

deps.forEach(function (dep) {
	var depPath = path.resolve(node_modules_dir, dep);
	config.resolve.alias[dep.split(path.sep)[0]] = depPath;
	config.module.noParse.push(depPath);
});

module.exports = config;
