/**
 * intro：       loginFilter
 * description： 登录 过滤器
 * author：      jufei
 * date：        2017/9/3
 */



function loginFilter() {
  return async function (ctx,next) {
    log(ctx.url.startsWith('/api/todo'));
    if(ctx.url.startsWith('/api/todo')){

      const userToken = ctx.request.headers.token;

      if(ctx.session.validity(userToken)){
        await next()
      }else {
        ctx.type = 'json';
        ctx.body = {
          code: 401,
          message: '请先登录'
        }
      }
    }else {
      await next()
    }
  }
}


module.exports = loginFilter;

