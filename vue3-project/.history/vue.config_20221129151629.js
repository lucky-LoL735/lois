const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolver')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: false
  },
  configureWebpack: (config) => {
    // 调试js
    config.devtool = 'source-map'
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    sourceMap: true
  }
})
