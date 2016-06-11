var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './server/server.js',
  output: { path: __dirname + '/build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/, loaders: ['sass'] },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};