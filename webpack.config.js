const path = require('path');
//自动打包html文件插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//自动清除dist打包目录及其目录下的所有文件
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {

	// 环境
	mode: "development",

	// 入口
	entry: './src/index.js',

	// 出口
	output: {
		filename:'main.js',
		path: path.resolve( __dirname, 'dist')
	},

	// 自动打包设置
	devServer: {
		// 以dist文件为基础启动一个服务器，
		contentBase: 'dist',
		// 服务器运行端口
		port: 9527,
		// 是否自动打开浏览器
		open: true
	},

	// 资源转换打包
	module: {
		rules: [

			// url-loader 图片等资源文件打包
			{
				test: /\.(png|jpg|gif)$/i,
				use: {
					loader: 'url-loader',
					options: {
						name:'[name]_[hash}.[ext]'
					}
				}
			},

			//css　css-loader style-loader样式文件打包
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

			//sass-loder sass/scss样式文件打包 
			//postcss-loader 自动添加厂商前缀
			{
        test: /\.(sass|scss)$/,
        use: [
          'style-loader', 
          {
          	loader: 'css-loader',
          	options: {
            	modules: true
          	}
        	}, 
        	'sass-loader', 
        	'postcss-loader'
        	]
      }
		]
	},

	// 插件
	plugins: [
	
		//自动打包html文件插件
		new htmlWebpackPlugin({
			template: 'src/index.html'
		}),

		//自动清除上一次打包的文件
		new cleanWebpackPlugin()
	]

}