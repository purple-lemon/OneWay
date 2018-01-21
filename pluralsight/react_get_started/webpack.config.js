var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "bin");
var scriptsDir = "static/js/";

module.exports = {
  entry: './src/index.js',
  output: {
    path: DIST_DIR,
    filename: scriptsDir + 'bundle.js',
    publicPath: "/bin/",
    sourceMapFilename: scriptsDir + 'bundle.map.js'
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Popper: ['popper.js', 'default'],
    //   // In case you imported plugins individually, you must also require them here:
    // }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ""
      // You can pass any key-value pairs, this was just an example.
      // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
    }),
  ],
  devtool: '#source-map',
  module: {
    //   loaders: [
    //     {
    //       test: /.jsx?$/,
    //       loader: 'babel-loader',
    //       exclude: /node_modules/,
    //       query: {
    //         presets: ['es2015', 'react']
    //       }
    //     },
    //     { 
    //       test: /\.css$/, 
    //       loader: "style-loader!css-loader" 
    //     },
    //     { 
    //       test: /\.png$/, 
    //       loader: "url-loader?limit=100000" 
    //     },
    //     { 
    //       test: /\.jpg$/, 
    //       loader: "file-loader" 
    //     },
    //     {
    //       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
    //       loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    //     },
    //     {
    //       test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
    //       loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    //     },
    //     {
    //       test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
    //       loader: 'file'
    //     },
    //     {
    //       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
    //       loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    //     }
    //   ]
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }

};