/**
 * intro：       koaServer
 * description： koaServer
 * author：      jufei
 * date：        2017/8/18
 */


const Koa = require('koa'),
  path = require('path'),
  fs = require('fs'),
  router = require('koa-router')(),
  staticFile = require('koa-static'),
  proxy = require('koa-better-http-proxy'),
  shell = require('shelljs');


const routes = require('../routes');


const app = new Koa();

// 环境变量
const isDevelopment = process.env.NODE_ENV === 'development';
const port = isDevelopment ? 8088 : 8088;


// 静态资源
app.use(staticFile(path.resolve(__dirname, '../public/')));

// 404页面处理
app.use(async (ctx, next) => {
  await next();
  if (ctx.body === undefined) {
    ctx.body = '404'
  }
});

app.use(async (ctx, next) => {
  console.log('log', ctx.request.url);
  await next();
});

/**
 * 开发模式： 使用webpack hot middleware
 * 生产模式： 直接发送打包好的文件
 */
if (isDevelopment) {
  const webpack = require('webpack');
  const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');

  let config = require('../webpack.config/webpack.config.dev');
  const compiler = webpack(config);

  let webpackDevMiddlewera = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },
  });

  app.use(webpackDevMiddlewera);
  app.use(hotMiddleware(compiler));

  router.get(routes, async (ctx, next) => {

    const mfs = webpackDevMiddlewera.fileSystem,
      filePath = path.join(config.output.path, 'index.html');

    webpackDevMiddlewera.waitUntilValid(function () {
      const html = mfs.readFileSync(filePath);
      ctx.type = 'html';
      ctx.body = html;
    });
  });

} else {
  router.get(routes, async (ctx, next) => {
    console.log('production');
    ctx.response.type = 'html';
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/dist/index.html'))
  });
}


router.get('/asd/restart', async (ctx, next) => {
  shell.exec(`forever restartall`);
  ctx.type = 'json';
  ctx.body = {
    code: 200,
    message: 'restart success'
  }
});

// 路由挂载
app.use(router.routes());

// 接口转发
const proxyHost = 'http://localhost:8089/';
app.use(proxy(proxyHost, {
  filter: ctx => {
    const isPass = /^\/api\/?/.test(ctx.url);
    if (isPass) console.log('proxy:' + ctx.url + ' => ' + proxyHost + ctx.url);
    return isPass
  },
}));


const server = app.listen(port, _ => {
  server.keepAliveTimeout = 0;
  console.log(`server start at ${port}`)
});

