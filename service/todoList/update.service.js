/**
 * Created by jufei on 2017/7/31.
 */

const mysql = require('../../utils/mysql'),
  API = require('../API'),
  tableName = require('../../utils/mysql/tableName');



module.exports = function (app) {
  app.put(API.PUT_TODO_DETAIL(':id'),function (req,res,next) {
    const id = req.params.id;
    const data = req.body;

    mysql(`UPDATE ${tableName.TODO_LIST} SET title='${data.title}',instancy=${data.instancy} WHERE id=${id};`)
      .then( data => {
        res.json({
          code: 200,
          data: 'ok',
          message: 'ok'
        })
      }).catch( err => {
        console.log(err);
        res.json({
          code: 500,
          data: 'err',
          message: '请稍后再试'
        })
    })
  })
};


