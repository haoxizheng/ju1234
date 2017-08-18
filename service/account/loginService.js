/**
 * intro：       login Service
 * description： login Service
 * author：      jufei
 * date：        2017/8/16
 */

const API = require('../API'),
  mysql = require('../mysql'),
  tableNames = require('../mysql/tableName');

module.exports = function (app) {
  app.post(API.LOGIN,function (req,res,next) {
    const {account,password} = req.body;
    mysql(`SELECT password FROM ${tableNames.TB_USER} WHERE email="${account}" OR phone="${account}";`)
      .then( data => {
        if(data.some( item => item.password == password)){
          res.json({
            code: 200,
            message: 'ok',
            data: {
              token: 'token'
            }
          })
        }else {
          res.json({
            code: 400,
            message: '账户与密码不匹配'
          })
        }
      }).catch( err => {
        res.json({
          code: 500,
          message: '服务器维护中，请稍后再试'
        })
    })
  })
};
