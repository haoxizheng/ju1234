/**
 * intro：       siderLink.service
 * description： 侧栏链接接口
 * author：      jufei
 * date：        2017/9/7
 */

const API = require('../API'),
  mysql = require('../../utils/mysql/index'),
  tableNames = require('../../utils/mysql/tableName');

module.exports = function (service) {
  service.get(API.GET_SIDER_LINK,async (ctx,next) => {
    ctx.type = 'json';
    try {
      const linkList = await mysql(`SELECT * FROM ${tableNames.TB_SIDER_LINK};`);
      ctx.body = {
        code: 200,
        data: linkList,
        message: 'ok'
      }
    }catch (err){
      ctx.body = {
        code: 400,
        data: [],
        message: '服务器异常请稍后再试'
      }
    }
  })
};
