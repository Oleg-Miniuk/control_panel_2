const path = require('path');
const getCommonWebpackModules = require('./commonWebpackModules');


module.exports = (env) => {
  const {
    module: { rules: commonRules },
    resolve: { alias: commonAliases },
    plugins: commonPlugins
  } = getCommonWebpackModules(env);

  console.log(env);

  const config = { mode: 'production',
    context: path.join(__dirname, '../src'),
    entry: { bundle: './index.js' },
    output: { filename: '[name].js',
      path: path.join(__dirname, '../build_prod') },
    resolve: { alias: { ...commonAliases } },
    module: { rules: [...commonRules] },
    plugins: [...commonPlugins] };

  return config;
};
