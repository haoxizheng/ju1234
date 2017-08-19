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

  service.get('/api/asd', async _ => {
    await new Promise( ( res,rej) => {
      setTimeout(() => {
        _.type = 'html';
        _.body = 'asdas';
        res()
      },100)
    })
  });


  service.post(API.LOGIN, async (ctx, next) => {
    const {account, password} = ctx.request.body;
    ctx.type = 'json';
    console.log(account,password);
    let data;
    try {
      data = await mysql(`SELECT password FROM ${tableNames.TB_USER} WHERE email="${account}" OR phone="${account}";`);
    } catch (err) {
      ctx.body = {
        code: 500,
        message: '服务器维护中，请稍后再试'
      }
    }
    if (data.some(item => item.password === password)) {
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

  })
};

