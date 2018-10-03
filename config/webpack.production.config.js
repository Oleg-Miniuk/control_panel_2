const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpackModules = require('./commonWebpackModules');

const {
  module: { rules: commonRules },
  resolve: {
    alias: commonAlias
  }
} = commonWebpackModules;

module.exports = (env) => {
  console.log(env);
  const config = { mode: 'production',
    context: path.join(__dirname, '../src'),
    entry: { bundle: './index.js' },
    output: { filename: '[name].js', path: path.join(__dirname, '../build_prod') },
    resolve: { alias: { ...commonAlias } },
    module: { rules: [...commonRules] },
    plugins: [new HtmlWebpackPlugin({
      template:
          env && env.cordova
            ? path.join(__dirname, '../public_cordova/index.html')
            : path.join(__dirname, '../public_web/index.html'),
      filename: 'index.html',
      inject: 'body'
    })] };

  return config;
};
