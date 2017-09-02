const path = require('path');
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
  }
};
