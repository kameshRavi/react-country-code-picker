const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'countryCodePicker.js',
    chunkFilename: 'vendors.js',
    library: 'react-country-code-picker',
    libraryTarget: 'umd'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1,
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc',
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=static/[name].[ext]&publicPath=/lib/',
        include: __dirname
      }
    ]
  }
};
