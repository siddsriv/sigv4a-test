const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    port: 8080,
  }
};