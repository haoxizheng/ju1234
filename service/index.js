/**
 * intro：       service
 * description： 数据  接口
 * author：      jufei
 * date：        2017/8/16
 */

const service = require('koa-router')();




module.exports = function () {
  // 账号相关 登录注册
  require('./account')(service);

  // todoList
  require('./todoList')(service);

  return service.routes()
};
