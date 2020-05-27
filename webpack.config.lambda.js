const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['nano-react-app']
        },
      },
    },{
      test: /\.css$/,
      use: [
          'node-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
      ],
      exclude: /node_modules/
    },{
      test: [/\.png$/, /\.jpg$/],
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/png'
      }
    }],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};