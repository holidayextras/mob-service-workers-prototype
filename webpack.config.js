'use strict'

const path = require('path')
const development = process.env.NODE_ENV !== 'production'
const workboxPlugin = require('workbox-webpack-plugin')
const dist = path.join(__dirname, '/assets')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(dist, '/build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: development,
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new workboxPlugin({
      globDirectory: dist,
      globPatterns: [ '**/*.{html,js,jpg}' ],
      swDest: path.join(dist, '/sw.js'),
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
