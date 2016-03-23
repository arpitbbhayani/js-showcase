var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports =  {
  name: "client",
  entry: {
    todoHome: "./src/components/todo-index/todo-index.jsx",
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'history'
     ]
  },
  output: {
    filename: "./js/[name]-[chunkhash].js",
    path: "build",
  },
  module: {
    preLoaders: [{
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders : [
        {
          test: /vendors\/.+\.(jsx|js)$/,
          loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        },
        {
          test: /client\/.+\.(jsx|js)$/,
          loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        },
        {
          test: /(\.js$|\.jsx$)/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },{
          test: /\.json?$/,
          exclude: /node_modules/,
          loader: "json-loader",
        },{
          test: /\.scss?$/,
          exclude: /node_modules/,
          loaders: ["style", "css", "sass"],
        },{
          test: /\.css$/,
          exclude: /node_modules/,
          loader: 'style-loader!css-loader'
        },{
          test: /\.(png|jpg|svg)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=8192'
        },{
          test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          exclude: /node_modules/,
          loader : 'file-loader'
        }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', './js/vendors-[chunkhash].js', Infinity),
    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "..", "src", "stats.json"),
          JSON.stringify(stats.toJson().assetsByChunkName));
      });
    },
    new CleanWebpackPlugin(['dist', 'build'], {
      verbose: true,
      dry: false,
      root: path.join(__dirname, '..'),
    })
  ]
}
