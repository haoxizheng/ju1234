/**
 * intro：       account service
 * description： account service
 * author：      jufei
 * date：        2017/8/16
 */

module.exports = function (service) {
  // 登录接口
  require('./login.service')(service);

  // 登出接口
  require('./logout.service')(service);

  // 注册接口
  require('./register.service')(service);

  // 登录状态验证
  require('./isLogin.service')(service);

  // 获取用户信息
  require('./userInfo.service')(service);
};
