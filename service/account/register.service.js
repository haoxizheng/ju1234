/**
 * intro：       register.service
 * description： register.service
 * author：      jufei
 * date：        2017/8/24
 */

const API = require('../API'),
  mysql = require('../../utils/mysql/index'),
  tableNames = require('../../utils/mysql/tableName');


/**
 * (name = "account",value = "用户名",required = true,paramType = "body",dataType = "string")
 * (name = "password",value = "密码",required = true,paramType = "body",dataType = "string")
 * (name = "phone",value = "手机号",required = true,paramType = "body",dataType = "string")
 */

module.exports = function (service) {
  service.post(API.REGISTER, async (ctx, next) => {
    const {account, password, phone} = ctx.request.body;

    // todo 可在插入前进行查询，手机号是否唯一,用户名是否唯一
    try {
      const data = await mysql(`INSERT INTO ${tableNames.TB_USER} (nickname,password,phone) VALUES ('${account}','${password}','${phone}');`);
      const token = ctx.session.createToken();
      let userInfo = {
        nickname: account,
        id: data.insertId
      };

      ctx.type = 'json';
      ctx.body = {
        code: 200,
        data: {
          userInfo,
          token
        },
        message: '新建成功'
      };

      userInfo.host = ctx.host;
      userInfo.ip = ctx.ip;
      ctx.session.set(token, userInfo)

    } catch (err) {
      console.log('register error', err);
      ctx.type = 'json';
      ctx.body = {
        code: 500,
        message: err
      }
    }
  })
};
