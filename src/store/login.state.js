/**
 * intro：       login.state
 * description： login.state
 * author：      jufei
 * date：        2017/8/16
 */

import {action, computed, observable} from 'mobx';
//===============================================================================
import * as pageUrls from 'src/config/pageUrls';
import API from 'root/service/API';
import ajax from 'src/utils/request';


class LoginState {
  @observable account = '';
  @observable password = '';

  constructor(){
    this.submitting = false;
  }

  @action changeAccount = (e) => {
    this.account = e.target.value;
  };

  @action changePassword = (e) => {
    this.password = e.target.value;
  };

  @action submitHandle = async (router) => {
    if(this.submitting) return false;

    this.submitting = true;

    try {
      const res = await ajax.Post(API.LOGIN,{
        account: this.account,
        password: this.password
      });

      if( res.data.code === 200){
        console.log(router);
        router.history.push(pageUrls.HOME);
      }

      this.submitting = false;
      console.log(res.data)
    }catch (err) {
      this.submitting = false;
      throw 'some error'
    }
  }
}


export default new LoginState();
