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

  constructor() {
    this.submitting = false;
  }

  // 账户输入框 change事件
  @action changeAccount = (e) => {
    this.account = e.target.value;
  };

  // 密码输入框 change事件
  @action changePassword = (e) => {
    this.password = e.target.value;
  };

  @action submitHandle = async (router, message) => {
    if (this.submitting) return false;
    const isPass = this.validity(message);
    if(!isPass) return false;

    this.submitting = true;

    try {
      const res = await ajax.Post(API.LOGIN, {
        account: this.account,
        password: this.password
      });

      if (res.data.code === 200) {
        message.success('登录成功',() => {
          router.history.push(pageUrls.HOME)
        });
      }else {
        message.error(res.data.message);
      }

      this.submitting = false;
      console.log(res.data)
    } catch (err) {
      this.submitting = false;
      throw err;
    }
  };


  validity(message){
    if(this.account === ''){
      message.error('账户名不得为空');
      return false;
    }else if(this.password === ''){
      message.error('密码不得为空');
      return false;
    }
    return true;
  }
}


export default new LoginState();
