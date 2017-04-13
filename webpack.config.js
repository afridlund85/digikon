const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'app'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: join(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg|mp4)?$/,
        use: 'file-loader'
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'app', 'index.html'),
      inject: 'body'
    }),
  ],
}
