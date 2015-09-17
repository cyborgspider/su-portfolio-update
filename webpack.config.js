var webpack         = require('webpack');
var path            = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath       = path.resolve(__dirname, './build/js/');

module.exports = {
  watch: true,
  devtool:'source-map',
  entry: './src/scripts/main.js',
  output: {
    path:              buildPath,
    filename:          '[name].webpack.js',
    sourceMapFilename: '[file].map'
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader', exclude: [nodeModulesPath] }
    ]
  }
};
