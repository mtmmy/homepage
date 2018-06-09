const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
    // publicPath: '/homepage/'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ]
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  plugins: [HtmlWebpackPluginConfig]
}