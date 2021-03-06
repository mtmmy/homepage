const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css"
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js'
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
      }, {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig
  ]
}