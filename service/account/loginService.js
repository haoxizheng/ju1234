/**
 * intro：       login Service
 * description： login Service
 * author：      jufei
 * date：        2017/8/16
 */

const API = require('../../API/index'),
  mysql = require('../../../utils/mysql/index'),
  tableNames = require('../../../utils/mysql/tableName');

module.exports = function (service) {
  service.post(API.LOGIN, async (ctx, next) => {
    const {account, password} = ctx.request.body;
    ctx.type = 'json';

    let data;
    try {
      data = await mysql(`SELECT password,id FROM ${tableNames.TB_USER} WHERE email="${account}" OR phone="${account}";`);
    } catch (err) {
      ctx.body = {
        code: 500,
        message: '服务器维护中，请稍后再试'
      }
    }

    const userId = getUserId(data,password);

    if(userId){
      const token = ctx.session.createToken();
      ctx.body = {
        code: 200,
        message: 'ok',
        data: {
          token: token,
          id: userId
        }
      };
     ctx.session.set(userId,token)
    }else {
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


