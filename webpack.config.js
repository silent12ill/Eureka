const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './client/src/css/ant-theme-vars.less'), 'utf8'));


const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/  },
      { test: /\.(png|jpg|gif|jpeg)$/, use: [ { loader: 'file-loader', options: {} }] },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, use: [ {loader: "style-loader"}, {loader: "css-loader"}, {loader: "less-loader", options: { modifyVars: themeVariables }} ] }

    ],
  },
  plugins: [ new HtmlWebpackPlugin({template: './client/src/index.html'})]
}


module.exports = config;