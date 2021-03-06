'use strict';
const webpack = require('webpack');

const protocol = 'http';
const host = 'localhost';
const port = '3000';

module.exports = config => {

  const devServerEntries = [
    `webpack-hot-middleware/client`,
    'webpack/hot/dev-server'
  ];

  if (typeof config.entry === 'object') {
    Object.keys(config.entry).forEach(entry => {
      config.entry[entry] = devServerEntries.concat(entry);
    });
  } else {
    config.entry = devServerEntries.concat(config.entry);
  }

  //add plugins
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

};
