const path = require('path');

module.exports = {
	/*入口*/
	entry: path.join(__dirname, 'src/index.js'),

	/*输出*/

	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	/*src文件夹下面的以.js结尾的文件，要使用babel解析*/
	/*cacheDirectory是用来缓存编译结果，下次编译加速*/
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, 'src')
		}]
	},
	/*
	 contentBase,URL的根目录。如果不设定的话，默认指向项目根目录。
	 host 指定一个host,默认是localhost。如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"。比如你用手机通过IP访问。
	 historyApiFallback 任意的404响应都被替代为index.html
	*/
	devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
}

