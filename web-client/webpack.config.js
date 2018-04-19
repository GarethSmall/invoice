//@flow
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'build/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.(s?)css$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, "../shared-flow"), path.resolve(__dirname, "../shared-redux")],
        exclude: [path.resolve(__dirname, "./")],
        query: {
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, path.resolve(__dirname, "../shared-flow"), path.resolve(__dirname, "../shared-redux")],
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Invoice App',
      hash: true,
      filename: './build/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};