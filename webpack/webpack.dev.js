const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = path.resolve(__dirname, '../src')

module.exports = {
  context: `${srcDir}`,
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "../src"),
    publicPath: '/src/',
  },
  devServer: {
  contentBase: "src",
  historyApiFallback: true,
  inline: true
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: "[name]-[local]-[hash:base64:6]",
                  camelCase: true,
                  importLoaders: 1,
                },
                },{
                  loader: 'postcss-loader',
                  options: {
                    plugins: (loader) => [
                      require ('postcss-nested')(),
                      require ('postcss-simple-vars')(),
                      require('postcss-import')(),
                    ]
                  }
                }
              ]
      })
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
    ],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new ExtractTextPlugin('../src/assets/css/[name].css'),
  ]
};
