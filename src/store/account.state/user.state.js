/**
 * intro：       用户信息、状态管理
 * description： user.state
 * author：      jufei
 * date：        2017/9/7
 */

import {action, computed, observable} from 'mobx';
// ======================================================================
import {message} from 'jc';
// ======================================================================
import API from 'root/service/API';
import ajax from 'src/utils/request';


class UserState {
  @observable loginStaus = false;
  @observable nickname = '';
  @observable avatar = '';

  constructor() {
    this.defaultNickname = 'hello world';
    this.defaultAvatar = 'hello world';
  }


  @computed get isLogin() {
    return this.loginStaus;
  };

  
  set isLogin(value) {
    if(value){
      this.loginStaus = true;
      this.getUserInfo()
    }else {
      this.loginStaus = false;
      this.initialUserInfo()
    }
  }

  // 是否登录验证
  @action loginValidity = () => {
    ajax.Get(API.GET_LOGIN_STATUS).subscribe(
      res => {
        this.isLogin = res.data.data.isLogin;
      },
      err => {
        this.isLogin = false;
      }
    )
  };

  // 获取用户信息
  @action getUserInfo = () => {
    ajax.Get(API.GET_USER_INFO)
      .retry(2)
      .subscribe(
        res => {
          log(res);
          if(res.data.code === 200){
            this.nickname = res.data.data.nickname;
            this.avatar = res.data.data.avatar;
          }
        },
        err => {
          log(err)
        }
      )
  };

  // 用户没有登录或者用户退出登录对信息进行初始化
  @action initialUserInfo = () => {
    this.nickname = this.defaultNickname;
    this.avatar = '';
  }
}


export default new UserState();
