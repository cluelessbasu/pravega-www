var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var contentBase = path.join(__dirname, 'client');

module.exports = {
  devtool: '#eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output: {
    path: path.join(contentBase, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client')
    },
    {
      test: /\.css?$/,
      loader: 'style!css'
    }]
  }
};
