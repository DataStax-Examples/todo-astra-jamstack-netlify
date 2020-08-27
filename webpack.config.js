const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/entry.jsx',
  target: 'web',
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    disableHostCheck: true
  },
  output: {
    path: path.resolve('./dist'),
    chunkFilename: '[name].bundle.js',
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader')
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'assets', to: 'assets'},
        {from: 'css', to: 'css'},
        {from: 'index.html'},
      ]
    }),
  ]
};
