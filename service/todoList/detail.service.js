/**
 * Created by jufei on 2017/7/31.
 * 获取todo详情
 */

const mysql = require('../../utils/mysql'),
  API = require('../API'),
  tableName = require('../../utils/mysql/tableName');

/**
 * (name = "id",value = "todoItem id",required = true,paramType = "params",dataType = "number")
 */
module.exports = function (service) {
  service.get(API.GET_TODO_DETAIL(':id'), async (_, next) => {
    const id = parseInt(_.params.id);
    _.type = 'json';
    try {
      let data = await mysql(`SELECT * FROM ${tableName.TODO_LIST} WHERE id=${id};`);
      _.body = {
        code: 200,
        data: data[0],
        message: 'ok'
      }
    } catch (err) {
      _.body = {
        code: 500,
        data: {},
        message: err
      }
    }
  })
};
