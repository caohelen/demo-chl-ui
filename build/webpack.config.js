const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '../packages/chl-ui/index.ts'),
	output: {
		path: path.resolve(__dirname, '../lib'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'chl-ui',
	},
	externals: {
		vue: {
			root: 'vue',
			commonjs: 'vue',
			commonjs2: 'vue',
		},
	},
	module: {
		rules: [{
			
		}]
	}

}