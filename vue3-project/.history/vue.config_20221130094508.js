const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtension = ['js', 'css']
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: false
  },
  // 生产环境下关闭source-map，可以减少生产环境代码大小，进而加快首次渲染速度
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      components({
        resolvers: [ElementPlusResolver()]
      }),
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtension.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  css: {
    sourceMap: true
  }
})
