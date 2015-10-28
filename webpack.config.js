var path = require('path');
var webpack = require('webpack');

process.env.BABEL_ENV = "start";

module.exports = {  
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'src/app.js')
    ],
	output: {
		path: path.resolve(__dirname, 'build/script'),
		filename: 'app.js'
	},

	devtool: "sourcemap",

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};