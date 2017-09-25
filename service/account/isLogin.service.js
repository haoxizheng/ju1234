/**
 * intro：       isLogin.service
 * description： isLogin.service
 * author：      jufei
 * date：        2017/9/7
 */


/**
 * @api {GET} /api/isLogin 用户是否登录
 * @apiName login check
 * @apiGroup Account
 *
 * @apiParam {String} token 登录token
 *
 * @apiSuccessExample Success-Response:
 *     {
 *        code: 200,
 *        data: {
 *          isLogin: [false | true]
 *        }
 *     }
 *
 */

const API = require('../API');

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
