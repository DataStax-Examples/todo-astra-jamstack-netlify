const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entry = './src/entry.jsx';
const outputPath = path.resolve('./dist');
const publicPath = process.env.PUBLIC_PATH || '/';
const resolve = {
  extensions: ['.js', '.jsx'],
};

const clientConfig = {
  entry,
  target: 'web',
  devtool: process.env.NODE_ENV === 'production' ? 'nosource-source-map' : 'source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: outputPath,
    chunkFilename: '[name].bundle.js',
    filename: 'index.bundle.js',
    publicPath,
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
  resolve,
  plugins: [
    // Copy all used resources (no dir available)
    new CopyWebpackPlugin([
      { from: "assets", to: "assets" },
      { from: "css", to: "css" },
      { from: "public" },
      { from: "index.html", to: "index.html", transform: (content) => {
          if (process.env.PUBLIC_PATH) {
            let path = process.env.PUBLIC_PATH;
            if (path.endsWith("/")) {
              path = path.substring(0, path.length - 1);
            }
            return String(content).replace(/{{CDN}}/g, path);
          } else {
            // Don`t use CDN
            return String(content).replace(/{{CDN}}\//g, "");
          }
        }
      }
    ]),
    // During the build make literal replacements on client side for 
    // process.env.API_URL, because there is no process.env
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || ((process.env.PUBLIC_PATH || "") + "/api")) 
    }),
  ],
  devServer: {
    proxy: {
       "/api": {
         "target": 'https://4e62bc79-0e12-4667-bd7d-2191ece2a32c-us-east1.apps.astra.datastax.com',
         "changeOrigin": true
       }
    }
  }
};

module.exports = [
  clientConfig,
];
