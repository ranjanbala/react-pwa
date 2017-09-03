const webpack = require ('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')
const dashboard = new Dashboard()
const myPort = 3000
const path = require('path')
const srcDir = path.resolve(__dirname, '../src')
module.exports = {
  context: `${srcDir}`,
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.js',
    publicPath: '/',
    pathinfo: true,
  },
  devServer: {
    contentBase: path.join(__dirname, '../'),
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    port: myPort,
    inline: true,
    quiet: true,   // important
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new AddAssetHtmlPlugin(),
    new DashboardPlugin({handler: dashboard.setData}),
  ],
};
