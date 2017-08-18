/**
 * intro：       koaServer
 * description： koaServer
 * author：      jufei
 * date：        2017/8/18
 */


const Koa = require('koa'),
  path = require('path'),

  fs = require('fs'),
  routes = require('./routes'),
  router = require('koa-router')(),
  staticFile = require('koa-static');


const app = new Koa();

// 环境变量
const isDevelopment = process.env.NODE_ENV === 'development';
const port = isDevelopment ? 8088 : 8088;

// 静态资源
app.use(staticFile(path.resolve(__dirname, './public/')));

// 404页面处理
app.use(async (ctx, next) => {
  await next();
  if (ctx.body === undefined) {
    ctx.body = '404'
  }
});

// log
app.use(async (ctx, next) => {
  console.log('log', ctx.request.url);
  next();
});


/**
 * 开发模式： 使用webpack hot middleware
 * 生产模式： 直接发送打包好的文件
 */
if (isDevelopment) {
  const webpack = require('webpack');
  const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');

  let config = require('./webpack.config/webpack.config.dev');
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
    ctx.response.type = 'html';
    ctx.body = fs.createReadStream(path.resolve(__dirname, './public/dist/index.html'))
  });
}

// 路由挂载
app.use(router.routes());




app.listen(port, _ => {
  console.log(`server start at ${port}`)
});
