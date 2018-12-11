const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  node: {
    fs: 'empty'
  },
  entry: {
    'lobby': './src/lobby.js',
    'demo' : './src/js/demo.js',
    'flipclock' : './src/js/flipclock.js',
    'game': './src/js/game.js',
    'jquery' : './src/js/jquery.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      { 
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      { 
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /jquery\.js/,
        use: ['script-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './src/index.ejs',
      chunks: ['flipclock', 'lobby', 'demo'],
      chunksSortMode: 'manual',
    }),
    new HtmlWebpackPlugin({
      filename: 'game.html',
      template: './src/game.ejs',
      chunks: ['game'],
      chunksSortMode: 'manual',
    }),
  ]
};