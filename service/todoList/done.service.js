/**
 * Created by jufei on 2017/7/31.
 * 标记完成
 */


const mysql = require('../../utils/mysql'),
  API = require('../API'),
  tableName = require('../../utils/mysql/tableName'),
  moment = require('moment');

/**
 * (name = "id",value = "todoItem id",required = true,paramType = "params",dataType = "number")
 */
module.exports = function (service) {
  service.put(API.PUT_TODO_DONE(':id'), async (ctx, next) => {
    const id = ctx.params.id;
    ctx.type = 'json';
    try {
      await mysql(`UPDATE ${tableName.TODO_LIST} SET done=1,doneTime=now() WHERE id=${id};`);
      ctx.body = {
        code: 200,
        data: 'ok',
        message: 'ok'
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        data: 'err',
        message: err
      }
    }
  })
};
