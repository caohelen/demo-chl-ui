const {Vue, VueLoaderPlugin} = require('vue-loader');
const HtmlWbpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'main.ts'), // 打包入口
	output: {
		path: path.resolve(__dirname, '../website/dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'vue', '.json'] // 解析文件顺序
	},
	module: {
		rules:[
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
				loader: 'url-loader',
			},
			{
				test: /\.(scss|css)$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWbpackPlugin({
			template: path.resolve(__dirname, 'temaplete.html')
		})
	]
}