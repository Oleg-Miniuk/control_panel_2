const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');

const {
  module: { rules: commonRules },
  resolve: {
    alias: commonAlias
  }
} = commonWebpackModules;

const config = {
  mode: 'production',

  context: path.join(__dirname, '../src'),

  entry: {
    bundle: './index.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build_prod')
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
