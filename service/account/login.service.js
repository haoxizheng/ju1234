/**
 * intro：       login Service
 * description： login Service
 * author：      jufei
 * date：        2017/8/16
 */

/**
 * @api {POST} /api/login 登录
 * @apiName login
 * @apiGroup Account
 *
 * @apiParam {String} account 用户名或用户手机号
 * @apiParam {String} password 用户密码
 *
 * @apiSuccess (success) {String} token 登录token
 * @apiSuccess (success) {Object} userInfo 用户信息
 * @apiSuccess (success) {String} message some thing
 *
 * @apiSuccess (userInfo) {String} avatar 头像链接
 * @apiSuccess (userInfo) {String} createTime 创建时间
 * @apiSuccess (userInfo) {String} email 用户邮箱
 * @apiSuccess (userInfo) {String} lastLogin 最后登录时间
 * @apiSuccess (userInfo) {String} nickname 用户昵称
 * @apiSuccess (userInfo) {String} phone 用户电话
 * @apiSuccess (userInfo) {String} trueName 用户真实姓名
 *
 * @apiSuccessExample Success-Response:
 *     {
 *        code: 200,
 *        data: {
 *          token: '8312a5731bf',
 *          userInfo: {
 *               avatar: 'http://asdasds.jpg',
 *               createTime: '2017-1-1',
 *               email: 'dem@qq.com',
 *               lastLogin: '2017-2-1',
 *               nickname: 'username',
 *               phone: '18881818181'，
 *               trueName: '张三'
 *          }
 *        },
 *        message: 'ok'
 *     }
 *
 */


const API = require('../API/index'),
  mysql = require('../../utils/mysql/index'),
  tableNames = require('../../utils/mysql/tableName');

module.exports = function (service) {
  service.post(API.LOGIN, async (ctx, next) => {
    const {account, password} = ctx.request.body;
    ctx.type = 'json';

    let data;
    try {
      data = await mysql(`SELECT password,id FROM ${tableNames.TB_USER} WHERE nickname="${account}" OR phone="${account}";`);
    } catch (err) {
      ctx.body = {
        code: 500,
        message: '服务器维护中，请稍后再试'
      }
    }

    // 获取用户id，若返回id则登录成功，否则失败
    const userId = getUserId(data,password);

    if(userId){
      // todo 登录完成设置 最后登录时间，或进行全局拦截，只要请求即认为最后登录时间，待完善
      const token = ctx.session.createToken();
      const userInfo = (await mysql(`SELECT * FROM ${tableNames.TB_USER} WHERE id="${userId}";`))[0];

      ctx.body = {
        code: 200,
        message: 'ok',
        data: {
          token: token,
          userInfo
        }
      };

      // 登陆成功获取用户信息，并存储在session中
     userInfo.host = ctx.host;
     userInfo.ip = ctx.ip;
     ctx.session.set(token,userInfo)
    }else {
      // todo 后期可添加验证功能，如用户不存在，可提示跳转注册页
      ctx.body = {
        code: 400,
        message: '账户与密码不匹配'
      }
    }
  })
};


/**
 * 验证密码获取用户id，验证通过则返回用户id，不通过则返回false
 *
 * @param data
 * @param password
 * @return {boolean | userId}
 */
function getUserId(data, password) {
  const length = data.length;
  for (let i = 0; i < length; i++) {
    if(data[i].password === password){
      return data[i].id
    }
  }
  return false;
}


