/**
 * intro：       account service
 * description： account service
 * author：      jufei
 * date：        2017/8/16
 */

const loginService = require('./login.service'),
  logoutService = require('./logout.service'),
  registerService = require('./register.service');

module.exports = function (service) {
  // 登录接口
  loginService(service);

  // 登出接口
  logoutService(service);

  // 注册接口
  registerService(service);
};
