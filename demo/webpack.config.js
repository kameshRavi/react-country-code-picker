const path = require('path');

module.exports = {
  entry: path.join(__dirname, './index.jsx'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 8880,
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: __dirname,
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc',
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: __dirname,
        loader: 'babel-loader'
      }
    ]
  }
};
