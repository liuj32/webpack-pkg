const path = require('path')
const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist')
  }
}

module.exports = WebpackMerge(commonConfig, devConfig)