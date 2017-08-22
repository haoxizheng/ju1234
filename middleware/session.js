/**
 * intro：       Session
 * description： Session
 * author：      jufei
 * date：        2017/8/22
 */

let __session_stage__ = {};

class Session{
  constructor(){
    this.stage = {};
  }

  get(token){
    return __session_stage__[token]
  }

  set(token,userInfo){
    __session_stage__[token] = userInfo;
    console.log('session',__session_stage__)
  }

  validity(token){

  }

  createToken(){
    const token = parseInt(Math.random() * 10000000000000).toString(16);
    if(__session_stage__[token]){
      return this.createToken()
    }else {
      return token
    }
  }
}


module.exports = function () {
  return async (ctx,next) => {
    ctx.session = new Session();
    await next()
  };
};



