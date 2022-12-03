const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true
  },
  configureWebpack: (config) => {
    // 调试js
    config.devtool = 'source-map'
  },
  css: {
    sourceMap: true
  }
})
