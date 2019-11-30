const path = require('path');

module.exports = {
  entry: './Client/Index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'Public'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx','.js']
  }
};