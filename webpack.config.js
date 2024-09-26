const path = require('path');

module.exports = {
  mode: 'development', // Use 'development' during active development or 'production' when ready to publish
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    react: 'react',
  },
};
