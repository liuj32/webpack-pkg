const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    clean: true, // webapck5新增
  },
  // devtool: 'inline-source-map',
}

module.exports = merge(commonConfig, prodConfig)