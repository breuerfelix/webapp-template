const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const { PORT } = process.env;

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],

	devServer: {
		port: PORT || 8080,
		hot: true,
		inline: true,
		progress: true,
		compress: true,
		historyApiFallback: true,
	},
});
