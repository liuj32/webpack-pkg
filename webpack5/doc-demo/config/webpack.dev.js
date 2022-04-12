const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    clean: true, // webapck5新增
    publicPath: '/',
  },
}

module.exports = merge(commonConfig, devConfig)