/**
 * intro：       register.state
 * description： register.state
 * author：      jufei
 * date：        2017/8/24
 */

import {action, computed, observable} from 'mobx';
//========================================================================
import message from 'src/components/Message/message';
//========================================================================
import API from 'root/service/API';
import ajax from 'src/utils/request';
import formReg from 'src/utils/formValidity';


class RegisterState {
  @observable account = '';
  @observable password = '';
  @observable phone = '';
  @observable submitting = false;
  @observable inputState = {
    account: '',
    password: '',
    phone: ''
  };

  @action inputValue = (key, e) => {
    this[key] = e.target.value;
    this.inputState[key] = formReg[key.toUpperCase()].test(e.target.value) ? 'success' : 'error';
  };

  @action submitHandle = () => {
    if (this.submitting || !this.formValidity())
      return false;

    this.submitting = true;

    ajax.Post(API.REGISTER, {
      account: this.account,
      phone: this.phone,
      password: this.password
    }).subscribe(
      res => {

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
