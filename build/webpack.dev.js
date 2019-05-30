// webpackk 开发环境配置文件

const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  // 自动打包设置
	devServer: {
		// 以dist文件为基础启动一个服务器，
		contentBase: '../dist',
		// 服务器运行端口
		port: 9527,
		// 是否自动打开浏览器
		open: true,
		// 启用模块热更新
		hot: true,
		// 模块热更新失败时，重新刷新浏览器
		hotOnly: true
	},
  
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig,devConfig)