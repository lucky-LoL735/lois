const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolver')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtension = ['js', 'css']
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: false
  },
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
