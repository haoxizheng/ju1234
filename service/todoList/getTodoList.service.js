/**
 * Created by jufei on 2017/7/30.
 * 获取todo列表
 */

const mysql = require('../../utils/mysql'),
  API = require('../API'),
  tableName = require('../../utils/mysql/tableName');


/**
 * (name = "index",value = "页码",required = false,paramType = "query",dataType = "number" , default = 1)
 * (name = "size",value = "每页多少条",required = false,paramType = "query",dataType = "number" , default = 10)
 * (name = "done",value = "是否完成",required = true,paramType = "query",dataType = "number")
 */
module.exports = function (app) {
  app.get(API.GET_TODO_LIST, async (ctx, next) => {

    const params = ctx.request.query;
    log(params);
    params.size = params.size ? parseInt(params.size) : 10;
    params.index = params.index ? parseInt(params.index) : 1;
    ctx.type = 'json';

    try {
      const list = (await mysql(sqlFactory(params,ctx.user_id)));
      const total = (await mysql(`SELECT count(*) AS count FROM ${tableName.TODO_LIST} WHERE done=${params.done};`))[0].count;
      ctx.body = {
        code: 200,
        data: {
          list: list,
          page: {
            total: total,
            size: parseInt(params.size),
            index: parseInt(params.index)
          }
        },
        message: 'ok'
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        data: {},
        message: '未知错误，请稍后重试'
      }
    }
  })
};

function sqlFactory(params,id) {
  const start = (params.index - 1) * params.size;
  return `
  SELECT * FROM ${tableName.TODO_LIST} 
  WHERE user_id=${id}
  AND
  done=${params.done}
  ${params.done == 1 ? 'ORDER BY doneTime DESC' : 'ORDER BY createTime DESC'} 
  LIMIT ${start},${params.size};
  `;
}
