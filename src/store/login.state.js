/**
 * intro：       login.state
 * description： login.state
 * author：      jufei
 * date：        2017/8/16
 */

import {action, computed, observable} from 'mobx';


class LoginState {
  @observable account = '';
  @observable password = '';
  @observable submitting = '';

  @action changeAccount = (e) => {
    this.account = e.target.value;
  };

  @action changePassword = (e) => {
    this.password = e.target.value;
  };

  @action submitHandle = (e) => {
    console.log(this.account,this.password)
  }
}


export default new LoginState();
