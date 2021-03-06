/**
 * 文件说明： webpack 生产环境配置
 * Created by jufei on 2017/03/20.
 */

let baseConfig = require('./webpack.config'),
    webpack = require('webpack'),
    path = require('path'),
    colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

let productionConfig = baseConfig;

productionConfig.output.publicPath = 'http://om0wp96oa.bkt.clouddn.com/dist/';


productionConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.dev.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
    // extract vendor chunks

);

module.exports = productionConfig;


console.log('webpack working'.info);
