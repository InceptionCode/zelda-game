/*global require, module,__dirname: true*/
/*eslint no-undef: "error"*/

const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports ={
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
  },
  module: {
    loaders: [
      {
         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: "url-loader?limit=10000&minetype=application/font-woff"
       },
      {
       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loaders: [
          "url?limit=10000&mimetype=application/octet-stream",
          "file-loader"
        ]
     },
      {
       test: /\.(png|jpg|gif|svg)$/,
       loader: 'url-loader'
     },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'latest', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080/html/zelda.html' })
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
