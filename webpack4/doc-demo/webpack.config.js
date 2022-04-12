const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.js'), // 单文件入口
  output: {
    filename: 'bundle.js',  // 输出文件名
    path: path.join(__dirname, 'dist')  // 输出目录
  }
}