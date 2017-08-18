/**
 * intro：       account service
 * description： account service
 * author：      jufei
 * date：        2017/8/16
 */

const loginService = require('./loginService');

module.exports = function (service) {
  loginService(service);
};
