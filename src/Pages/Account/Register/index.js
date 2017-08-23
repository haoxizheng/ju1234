/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
//========================================================================
// import message from 'src/utils/message';
//========================================================================
import ajax from 'src/utils/request';
import API from 'root/service/API';
import './register-form.less';

function mapPropsToState(store) {
  return {
    loginState: store.loginState
  }
}

@inject(mapPropsToState)
@observer
class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount(){
    // 用户进入login页面，即视为退出登录
    this.logout();
  }

  // 按下键盘enter事件
  keyDownHandle = (e) => {
    if(e.keyCode === 13){
      this.props.loginState.submitHandle(this.context.router);
    }
  };

  // 提交表单
  submitHandle = () => {
    this.props.loginState.submitHandle(this.context.router);
  };

  logout = () => {
    ajax.Put(API.LOGOUT).subscribe()
  };

  render() {
    const {
      account, password,
      changeAccount, changePassword
    } = this.props.loginState;
    return (
      <form className="register-form" onKeyDown={this.keyDownHandle}>
        <div className="ju-logo"><img src="#" alt=""/></div>
        <h3>ju1234</h3>
        <input
          type="text"
          placeholder="Account"
          value={account}
          onChange={changeAccount}
        />
        <input
          type="email"
          placeholder="Email"
          value={password}
          onChange={changePassword}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={changePassword}
        />
        <button
          type="button"
          className="register-submit"
          onClick={this.submitHandle}
        >创建新用户
        </button>
      </form>
    )
  }
}

export default Login;
