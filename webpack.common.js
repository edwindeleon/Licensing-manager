const path = require('path');
const HtmlWebpackPathAssetsFix = require('html-webpack-plugin-assets-fix');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ },
      {
        test: /\.css$/, loader: [ 'style-loader', 'css-loader' ]
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
      query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-react-jsx','transform-es2015-modules-commonjs','syntax-dynamic-import','transform-object-rest-spread','transform-regenerator','transform-runtime'],
        },
      },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
      query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-react-jsx','transform-es2015-modules-commonjs','syntax-dynamic-import','transform-object-rest-spread','transform-regenerator','transform-runtime'],
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    })/*,
    new HtmlWebpackPlugin({
      template: './client/statics/css/ace.css',
      filename: 'statics/css/ace.css',
      chunks: ['statics'],
      fixAssets: true
    })*/

    ]
}
