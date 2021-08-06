const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};