/**
 * intro：       todolist.create.service
 * description： 新建todo
 * author：      jufei
 * date：        2017/8/24
 */

const mysql = require('../../utils/mysql'),
  tableName = require('../../utils/mysql/tableName'),
  API = require('../API');



/**
 * (name = "instancy",value = "是否紧急",required = true,paramType = "body",dataType = "number")
 * (name = "title",value = "事件简要说明",required = true,paramType = "body",dataType = "string")
 * (name = "user_id",value = "用户id",required = true,paramType = "body",dataType = "number")
 */


module.exports = function (service) {
  // 新建todo
  service.post(API.POST_TODO_CREATE, async (ctx, next) => {
    ctx.type = 'json';
    ctx.request.body.user_id = parseInt(ctx.user_id);
    try {
      await mysql(createSqlFactory(ctx.request.body));
      ctx.body = {
        code: 200,
        data: 'ok',
        message: 'success create'
      }
    }catch (err){
      console.log(err);
      ctx.body = {
        code: 500,
        data: 'something err',
        message: 'err'
      }
    }
  })
};


function createSqlFactory(data) {
  console.log(data);
  let keys = Object.keys(data),
    values = [];

  keys.map((item, index) => {
    if (typeof data[item] === 'string') {
      values.push(`'${data[item]}'`)
    } else {
      values.push(data[item])
    }
  });

  return  `INSERT INTO ${tableName.TODO_LIST} (${keys.join(',')}) VALUES (${values.join(',')});`;
}



