/**
 * intro：       loginFilter
 * description： 登录 过滤器
 * author：      jufei
 * date：        2017/9/3
 */



module.exports = function loginFilter() {
  return async function (ctx,next) {
    log(ctx.url.startsWith('/api/todo'));
    if(ctx.url.startsWith('/api/todo')){
      const userToken = ctx.request.headers.token;

      // 验证通过
      if(ctx.session.validity(userToken)){
        const info = ctx.session.get(userToken);
        ctx.user_id = info.id;
        log('info',info);
        await next();
      // 验证失败
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
};



