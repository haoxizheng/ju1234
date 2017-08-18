/**
 * intro：       login Service
 * description： login Service
 * author：      jufei
 * date：        2017/8/16
 */

const API = require('../API'),
  mysql = require('../mysql'),
  tableNames = require('../mysql/tableName');

module.exports = function (service) {
  service.post(API.LOGIN,async ctx => {
    const {account, password} = ctx.request.body;
    ctx.type = 'json';
    try {
      const data = await mysql(`SELECT password FROM ${tableNames.TB_USER} WHERE email="${account}" OR phone="${account}";`);
      console.log('rereere', data)
      if (data.some(item => item.password == password)) {
        ctx.body = {
          code: 200,
          message: 'ok',
          data: {
            token: 'token'
          }
        }
      } else {
        ctx.body = {
          code: 400,
          message: '账户与密码不匹配'
        }
      }
    }catch (err){
      ctx.body = {
        code: 500,
        message: '服务器维护中，请稍后再试'
      }
    }
  })
};

