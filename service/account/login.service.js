/**
 * intro：       login Service
 * description： login Service
 * author：      jufei
 * date：        2017/8/16
 */

const API = require('../API/index'),
  mysql = require('../../utils/mysql/index'),
  tableNames = require('../../utils/mysql/tableName');

/**
 * (name = "account",value = "用户名或手机号",required = true,paramType = "body",dataType = "string")
 * (name = "password",value = "密码",required = true,paramType = "body",dataType = "string")
 */
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


