/**
 * intro：       register.state
 * description： register.state
 * author：      jufei
 * date：        2017/8/24
 */

import {action, computed, observable} from 'mobx';
//========================================================================
import {message} from 'jc';
//========================================================================
import API from 'root/service/API';
import ajax from 'src/utils/request';
import formReg from 'src/utils/formValidity';
import * as pageUrls from 'src/config/pageUrls';

class RegisterState {
  @observable account = '';
  @observable password = '';
  @observable phone = '';
  @observable sub017mitting = false;
  @observable inputState = {
    account: '',
    password: '',
    phone: ''
  };

  // 数据初始化
  @action init = () => {
    this.account = '';
    this.password = '';
    this.phone = '';
    this.submitting = false;
    this.inputState = {
      account: '',
      password: '',
      phone: ''
    };
  };

  // 用户输入事件
  @action inputValue = (key, e) => {
    this[key] = e.target.value;
    this.inputState[key] = formReg[key.toUpperCase()].test(e.target.value) ? 'success' : 'error';
  };

  // 表单提交事件
  @action submitHandle = (router) => {
    if (this.submitting || !this.formValidity())
      return false;

    this.submitting = true;

    ajax.Post(API.REGISTER, {
      account: this.account,
      phone: this.phone,
      password: this.password
    }).subscribe(
      res => {
        if(res.data.code === 200){
          message.success('创建成功');
          // window.token = res.data.data.token;
          localStorage.setItem('token',res.data.data.token);
          router.history.push(pageUrls.HOME)
        }else {
          message.error(res.data.message)
        }
      },
      err => {
        message.error('服务器繁忙，请稍候再试');
        this.submitting = false;
      },
      _ => {
        console.log('complete');
        this.submitting = false;
      }
    )
  };

  // 表单校验
  formValidity = () => {
    if (!formReg.ACCOUNT.test(this.account)) {
      message.error('用户名不得为空');
      return false;
    } else if (!formReg.PHONE.test(this.phone)) {
      message.error('手机号必须为11位数字');
      return false;
    } else if (!formReg.PASSWORD.test(this.password)) {
      message.error('密码为6-20位字母数字组合');
      return false;
    }
    return true;
  }
}


export default new RegisterState();
