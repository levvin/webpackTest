// webpack 生产环境配置文件
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, prodConfig);