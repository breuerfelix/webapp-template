const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const { getPath } = require('./utils');

module.exports = merge(common, {
	entry: [ getPath('src') ],
	mode: 'production',
	devtool: 'none',
});
