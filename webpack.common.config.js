const { getPath } = require('./utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [ getPath('src') ],

	performance: { hints: false },

	resolve: {
		extensions: [ '.js', '.jsx' ],
		modules: [ 'node_modules', 'src' ],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
		},
	},

	output: {
		filename: 'bundle.[hash].js',
		path: getPath('dist'),
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: getPath('src', 'index.html'),
		}),
		new CleanWebpackPlugin(),
	],
};
