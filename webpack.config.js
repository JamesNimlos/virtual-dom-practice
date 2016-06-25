'use strict';
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/app/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
	    { test: /\.json$/, loader: 'json-loader' }
	  ]
	},

  devSever: {
    contentBase: path.resolve(__dirname, './dist')
	}
};

module.exports = config;