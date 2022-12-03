const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const 
// 添加Gzip压缩，减小文件大小。这样同等网络条件下可以加快拉取服务端资源，进而加快渲染。
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',//[file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串
        algorithm: 'gzip',//压缩成gzip
        //所有匹配该正则的资源都会被处理。默认值是全部资源。
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,//只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
        minRatio: 0.8//只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
      })
    ]
  }
})
