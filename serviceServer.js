/**
 * intro：       serviceServer
 * description： serviceServer
 * author：      jufei
 * date：        2017/8/18
 */

const Koa = require('koa'),
  bodyParser = require('koa-bodyparser'),
  router = require('koa-router')();

const service = require('./service');

const app = new Koa();
const port = 8089;

app.use(bodyParser());

// log
app.use(async (ctx, next) => {
  console.log(ctx.url);
  await next()
});


// 接口挂载
app.use(service(router));

app.listen(port, _ => {
  console.log(`service start at ${port}`);
});

