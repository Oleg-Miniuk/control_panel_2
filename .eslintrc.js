const path = require('path');

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    mocha: true,
    es6: true,
    jest: true
  },
  rules: {
    'react/no-unused-state': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'object-curly-newline': 0,
    'no-mixed-operators': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'react/prefer-stateless-function': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './config/webpack.config.js')
      }
    }
  },
  plugins: [
    'react',
    'jest'
  ]
};
