const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = [
  {
    name: 'dev',
    mode: 'development',
    entry: './index.js',
    output: {
      filename: './bundle-dev.js',
      clean: true
    },
    plugins: [new HtmlWebpackPlugin(), new DefinePlugin({
      FIREBASE_CONFIG: JSON.stringify(require('./config.dev.json'))
    })],
  },
  {
    name: 'staging',
    mode: 'production',
    entry: './index.js',
    output: {
      filename: './bundle-staging.js',
      clean: true
    },
    plugins: [new HtmlWebpackPlugin(), new DefinePlugin({
      FIREBASE_CONFIG: JSON.stringify(require('./config.staging.json'))
    })],
  },
  {
    name: 'prod',
    mode: 'production',
    entry: './index.js',
    output: {
      filename: './bundle-prod.js',
      clean: true
    },
    plugins: [new HtmlWebpackPlugin(), new DefinePlugin({
      FIREBASE_CONFIG: JSON.stringify(require('./config.prod.json'))
    })],
  }
];