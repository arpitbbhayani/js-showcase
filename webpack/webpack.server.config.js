var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var nodeModules = {};
var ExtractTextPlugin = require('extract-text-webpack-plugin');

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports =
{
  name: 'server',
  target: 'node',
  entry: './src/server.js',
  output: {
    path: './dist/',
    publicPath: 'dist/',
    filename: "[name].js",
  },
  node: {
    __dirname: false,
  },
  externals: nodeModules,
  module: {
    preLoaders: [{
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      { test: /\.(sass|scss)$/, loader: 'stylelint' }
    ],
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },{
          test: /\.json?$/,
          exclude: /node_modules/,
          loader: "json-loader",
      },{
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass"
        )
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader"
        )
      },{
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/, exclude: /node_modules/,
        exclude: /node_modules/,
        loader : 'file-loader'
      },{
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  stylelint: {
    configFile: path.join(__dirname, '../.stylelintrc.js'),
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', {allChunks: false}),
  ]
};
