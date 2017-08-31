/**
 * Created by jufei on 2017/7/31.
 */

const mysql = require('../../utils/mysql'),
  API = require('../API'),
  tableName = require('../../utils/mysql/tableName');


/**
 * (name = "title",value = "todoItem 简介",required = true,paramType = "query",dataType = "string")
 * (name = "instancy",value = "是否紧急",required = true,paramType = "query",dataType = "number")
 * (name = "id",value = "todoItem id",required = true,paramType = "params",dataType = "number")
 */
module.exports = function (app) {
  app.put(API.PUT_TODO_DETAIL(':id'), async (ctx, next) => {
    ctx.type = 'json';
    const id = ctx.params.id;
    const {title, instancy} = ctx.request.body;

    try {
      await mysql(`UPDATE ${tableName.TODO_LIST} SET title='${title}',instancy=${instancy} WHERE id=${id};`);
      ctx.body = {
        code: 200,
        data: 'ok',
        message: 'ok'
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        message: err
      }
    }
  })
};


