const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['./src/lobby.js'],
  output: {
    filename: 'lobby.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};