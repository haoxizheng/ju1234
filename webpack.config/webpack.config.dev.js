/**
 * 文件说明： 添加开发模式配置
 *
 * Created by jufei on 2017/03/20.
 */

let baseConfig = require('./webpack.config'),
  path = require('path'),
  webpack = require('webpack'),
  CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
  WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin'),
  hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

let developingConfig = baseConfig;

// developingConfig.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=50000');
developingConfig.entry.unshift(hotMiddlewareScript);
developingConfig.output.publicPath = '/dist/';

developingConfig.devtool = 'source-map';
developingConfig.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
  new webpack.optimize.OccurrenceOrderPlugin()
);

module.exports = developingConfig;
