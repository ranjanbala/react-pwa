const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = path.resolve(__dirname, '../src')
module.exports = {
  context: `${srcDir}`,
  entry: `${srcDir}/index.js`,
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
      }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
      }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
        }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]',
          camelCase: true
          }
        }]
      }]
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    })
  ]
};
