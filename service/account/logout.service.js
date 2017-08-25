/**
 * intro：       logout
 * description： logout
 * author：      jufei
 * date：        2017/8/23
 */

const API = require('../API/index');

/**
 * (name = "token",value = "token",required = false,paramType = "header",dataType = "string")
 */
module.exports = function (service) {
  service.put(API.LOGOUT,async (ctx,next) => {
    const userToken = ctx.request.headers.token;
    ctx.session.remove(userToken);
    ctx.type = 'json';
    ctx.body = {
      code: 200,
      message: '登出成功'
    };
  })
};
