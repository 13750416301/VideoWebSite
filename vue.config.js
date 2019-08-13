const webpack = require('webpack')

module.exports = {
  chainWebpack: (config) => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  },
  css: {
    sourceMap: true
  },
  devServer: {
    port: 8040
  }
}