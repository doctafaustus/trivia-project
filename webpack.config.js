const path = require('path');

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
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader',] }
    ]
  }
};