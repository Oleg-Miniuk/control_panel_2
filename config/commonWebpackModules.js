const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const commonWebpackModules = (env = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|ico|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'files/[name].[ext]' }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@core': path.join(__dirname, '../core')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:
        env && env.cordova
          ? path.join(__dirname, '../public_cordova/index.html')
          : path.join(__dirname, '../public_web/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        cordova: JSON.stringify(env.cordova)
      }
    })
  ],
  devtool: env.production ? 'source-map' : 'inline-source-map',
});

module.exports = commonWebpackModules;
