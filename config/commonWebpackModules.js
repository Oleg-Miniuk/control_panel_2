const path = require('path');

const commonWebpackModules = {
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
      },
    ]
  },
  resolve: {
    alias: {
      '@core': path.join(__dirname, '../core')
    }
  }
};

module.exports = commonWebpackModules;
