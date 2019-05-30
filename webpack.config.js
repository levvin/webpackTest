const path = require('path');

module.exports = {
	mode: "development",

	entry: './src/index.js',

	output: {
		filename:'main.js',
		path: path.resolve( __dirname, 'dist')
	},

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
	}
}