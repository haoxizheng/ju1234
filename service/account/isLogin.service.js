/**
 * intro：       isLogin.service
 * description： isLogin.service
 * author：      jufei
 * date：        2017/9/7
 */

const API = require('../API');

/**
 * (name = "token",value = "token",required = true,paramType = "header",dataType = "string")
 */
module.exports = function (service) {
  service.get(API.GET_LOGIN_STATUS,async (ctx,next) => {
    const userToken = ctx.request.headers.token;
    ctx.type = 'json';
    ctx.body = {
      code: 200,
      data: {
        isLogin: ctx.session.validity(userToken)
      }
    }
  })
};
