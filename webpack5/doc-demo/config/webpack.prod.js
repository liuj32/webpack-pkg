const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'development',
  // mode: 'production',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[contenthash].bundle.js',
    // chunkFilename: '[id].js',
    // filename: 'webpack-numbers.js',
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd',
    // },
    clean: true, // webapck5新增
  },
  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // },    
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // devtool: 'inline-source-map',
}

module.exports = merge(commonConfig, prodConfig)