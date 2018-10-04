const path = require('path');
const getCommonWebpackModules = require('./commonWebpackModules');

module.exports = (env) => {
  const { module: { rules: commonRules },
    resolve: { alias: commonAliases },
    plugins: commonPlugins } = getCommonWebpackModules(env);

  const config = { mode: 'development',
    context: path.join(__dirname, '../src'),
    entry: { bundle: './index.js' },
    output: { filename: '[name].js', path: path.join(__dirname, '../build_dev') },
    devServer: { contentBase: [path.join(__dirname, '../build_dev'),
      env && env.cordova ? path.join(__dirname, '../public_cordova') : path.join(__dirname, '../public_web')],
    port: 1337,
    historyApiFallback: true },
    resolve: { alias: { ...commonAliases } },
    module: { rules: [...commonRules] },
    plugins: [...commonPlugins]
  };

  return config;
};
