/**
 * intro：       Session
 * description： Session
 * author：      jufei
 * date：        2017/8/22
 */

let __session_stage__ = {};

class Session {

  // 获取所有信息
  all() {
    return __session_stage__;
  }

  // 获取用户信息
  get(token) {
    return __session_stage__[token]
  }

  // 设置用户信息
  set(token, userInfo) {
    __session_stage__[token] = userInfo;
    console.log('session', __session_stage__)
  }

  // 用户登出，移除记录的数据
  remove(token) {
    delete __session_stage__[token]
  }

  // 用户是否登录验证
  validity(token) {
    if (__session_stage__[token])
      return true;
    else return false
  }

  // 创建token
  createToken() {
    const token = parseInt(Math.random() * 10000000000000).toString(16);
    if (__session_stage__[token]) {
      return this.createToken()
    } else {
      return token
    }
  }
}


module.exports = function () {
  return async (ctx, next) => {
    ctx.session = new Session();
    await next()
  };
};



