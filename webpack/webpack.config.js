const path = require('path');

const srcDir = path.resolve(__dirname, '../src')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    `${srcDir}/main.js`,
  ],
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.js',
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
};
