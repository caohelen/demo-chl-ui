module.exports = {
	// 预设
	presets: [
		"@babel/preset-env",
		"@babel/preset-typescript" // 解析ts语法
	],
	overrides : [{
		test: /\.vue$/,
		plugins: [
			"@babel/transform-typescript",
		]
	}],
	env: {
		utils: {
			plugins: [
				[
					"babel-plugin-module-resolver",
					{ root: 'chl-ui' }
				]
			]
		}
	}
}