/**
 * intro：       login.state
 * description： login.state
 * author：      jufei
 * date：        2017/8/16
 */

import {action, computed, observable} from 'mobx';
import message from 'src/components/Message/message';
//===============================================================================
import * as pageUrls from 'src/config/pageUrls';
import API from 'root/service/API';
import ajax from 'src/utils/request';


class LoginState {
  // 账户名
  @observable account = '';
  // 密码
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

  // 登录表单提交
  @action submitHandle = async (router) => {
    if (this.submitting) return false;
    const isPass = this.validity(message);
    if (!isPass) return false;

    this.submitting = true;

    ajax.Post(API.LOGIN, {
      account: this.account,
      password: this.password
    }).subscribe(
        data => {
          window.token = data.token;
          message.success('登录成功', () => {
            router.history.push(pageUrls.HOME)
          });
          this.submitting = false;
        },
        error => {
          this.submitting = false;
          message.error(error);
          console.log('error', error)
        },
        complete => {
          console.log('complete', complete)
        }
      )


    // try {
    //   const res = await ajax.Post(API.LOGIN, {
    //     account: this.account,
    //     password: this.password
    //   });
    //
    //   if (res.data.code === 200) {
    //     window.token = res.data.data.token;
    //     message.success('登录成功', () => {
    //       router.history.push(pageUrls.HOME)
    //     });
    //   } else {
    //     message.error(res.data.message);
    //   }
    //
    //   this.submitting = false;
    //   console.log(res.data)
    // } catch (err) {
    //   this.submitting = false;
    //   throw err;
    // }
  };


  // 表单校验
  validity(message) {
    if (this.account === '') {
      message.error('账户名不得为空');
      return false;
    } else if (this.password === '') {
      message.error('密码不得为空');
      return false;
    }
    return true;
  }
}


export default new LoginState();
