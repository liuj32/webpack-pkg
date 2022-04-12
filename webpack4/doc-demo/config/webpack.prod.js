const path = require('path')
const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.join(__dirname, '..', 'dist')
  }
}

module.exports = WebpackMerge(commonConfig, prodConfig)