/**
 * intro：       userInfo.service
 * description： userInfo.service
 * author：      jufei
 * date：        2017/9/7
 */

const API = require('../API');

/**
 * (name = "token",value = "token",required = true,paramType = "header",dataType = "string")
 */
module.exports = function (service) {
  service.get(API.GET_USER_INFO,async (ctx,next) => {
    const userToken =  ctx.request.headers.token;
    const userInfo = ctx.session.get(userToken);
    ctx.type = 'json';
    ctx.body = {
      code: 200,
      data: {
        avatar: userInfo.avatar,
        nickname: userInfo.nickname
      },
      message: 'user info'
    }
  })
};
