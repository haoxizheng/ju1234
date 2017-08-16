/**
 * intro：       service
 * description： 数据  接口
 * author：      jufei
 * date：        2017/8/16
 */

// 账号相关
const accountService = require('./account');


module.exports = function (app) {
  accountService(app);
};
