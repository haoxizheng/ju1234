/**
 * intro：       login.state
 * description： login.state
 * author：      jufei
 * date：        2017/8/16
 */

import {action, computed, observable} from 'mobx';
import message from 'src/components/Message/message';
import qs from 'query-string';
//===============================================================================
import * as pageUrls from 'src/config/pageUrls';
import API from 'root/service/API';
import ajax from 'src/utils/request/index';


class LoginState {
  // 账户名
  @observable account = '';
  // 密码
  @observable password = '';

  @observable submitting = false;

  @action init = () => {
    this.account = '';
    this.password = '';
    this.submitting = '';
  };

  // 账户输入框 change事件
  @action changeAccount = (e) => {
    this.account = e.target.value;
  };

  // 密码输入框 change事件
  @action changePassword = (e) => {
    this.password = e.target.value;
  };

  // 登录表单提交 userState 登录成功修改用户登录状态并重新获取用户信息
  @action submitHandle = async (router,userState) => {
    if (this.submitting) return false;
    const isPass = this.validity(message);
    if (!isPass) return false;

    this.submitting = true;

    ajax.Post(API.LOGIN, {
      account: this.account,
      password: this.password
    }).subscribe(
        res => {
          if(res.data.code === 200){
            localStorage.setItem('token',res.data.data.token);
            userState.isLogin = true;
            message.success('登录成功',800,this.redirect.bind(null,router));
          }else {
            message.error(res.data.message);
          }
        },
        error => {
          message.error('服务器繁忙，请稍候再试');
          this.submitting = false;
        },
        _ => {
          this.submitting = false;
        }
      )
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


  // 登陆成功跳转
  redirect(router){
    const appId = parseInt(qs.parse(location.search).appId);

    // todoList
    if(appId === 0){
      location.href = '/todoList';
    }else {
      router.history.push(pageUrls.HOME)
    }
  }
}


export default new LoginState();
