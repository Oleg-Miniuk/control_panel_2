const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');

const {
  module: { rules: commonRules },
  resolve: { alias: commonAlias }
} = commonWebpackModules;

const config = {
  mode: 'development',

  context: path.join(__dirname, '../src'),

  entry: {
    bundle: './index.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build_dev')
  },

  devServer: {
    contentBase: [
      path.join(__dirname, '../build_dev'),
      path.join(__dirname, '../public')
    ],
    port: 1337,
    historyApiFallback: true
  },

  resolve: {
    alias: {
      ...commonAlias
    }
  },

  module: {
    rules: [...commonRules]
  }
};

module.exports = config;
