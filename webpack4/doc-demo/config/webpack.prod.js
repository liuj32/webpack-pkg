const path = require('path')
const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.join(__dirname, '..', 'dist')
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
}

module.exports = WebpackMerge(commonConfig, prodConfig)