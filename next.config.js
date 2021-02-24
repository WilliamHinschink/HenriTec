const { readFileSync } = require('fs');

const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery',
      })
    )
    return config
  },
}
