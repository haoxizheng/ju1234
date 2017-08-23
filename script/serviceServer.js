/**
 * intro：       serviceServer
 * description： serviceServer
 * author：      jufei
 * date：        2017/8/18
 */

const Koa = require('koa'),
  bodyParser = require('koa-bodyparser'),
  router = require('koa-router')();

// 数据接口
const service = require('../service');
// redis
const session = require('../middleware/session');

const app = new Koa();
const port = 8089;

app.use(bodyParser());

// session middleware
app.use(session());

// // log
// app.use(async (ctx, next) => {
//   await next()
// });


// 接口挂载
app.use(service(router));

app.listen(port, _ => {
  console.log(`service start at ${port}`);
});

