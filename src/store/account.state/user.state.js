/**
 * intro：       user.state
 * description： user.state
 * author：      jufei
 * date：        2017/9/7
 */

import {action, computed, observable} from 'mobx';
// ======================================================================
import API from 'root/service/API';
import ajax from 'src/utils/request';


class UserState{
  @observable isLogin = false;
  @observable nickname = 'hello world';
  @observable avatar = '';

  constructor(){
    this.defaultNickname = 'hello world';
  }

  @action loginValidity = () => {
    ajax.get(API.GET_LOGIN_STATUS).subscribe(
      res => {

      },
      err => {

      },
      _ => {

      }
    )
  };

  @action getUserInfo = () => {

  };
}
