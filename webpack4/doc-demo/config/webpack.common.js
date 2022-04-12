const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// webpack5写法
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const srcPath = path.join(__dirname, '..', 'src')

// console.log(process.env.NODE_ENV) // process.env只能在配置文件中访问， 除非设置了全局变量

module.exports = {
  entry: path.join(srcPath, 'index'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'], // 1. 开启缓存
        include: srcPath, // 2. 缩小适合范围(写include或exclude)
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 清除之前的打包文件
    new htmlWebpackPlugin({
      // 以根目录中的index.html文件作为模板来自动生成dist/index.html文件
      // 注意，这里是相对根目录而言的，因为脚本的上下文是在根目录下
      template: 'index.html',
      // inject: 'head', // 脚本注入的位置，可以是head, body，或者为 false默认
      // 在这里还可以自定义参数，在模板中，使用ejs方式 <%= htmlWebpackPlugin.options %>获取自定义属性
      title: 'webpack demo',
      // webpack5默认开启压缩属性，webpack4要手动设置
      // minify: {
      //   removeComments: true, // 删除注释
      //   collapseWhitespace: true  // 删除空格
      // }
    })
  ]
}