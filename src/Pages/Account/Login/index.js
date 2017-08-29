/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Button} from 'jc';
//========================================================================
// import message from 'src/utils/message';
//========================================================================
import ajax from 'src/utils/request';
import API from 'root/todoList/API';
import setTitle from 'src/utils/setTitle';
import './login-form.less';

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

    setTitle('登录');
  }

  componentWillUnmount(){
    this.props.loginState.init()
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
      changeAccount, changePassword,submitting
    } = this.props.loginState;

    console.log('submitting',submitting)
    return (
      <form className="login-form" onKeyDown={this.keyDownHandle}>
        <div className="ju-logo"><img src="#" alt=""/></div>
        <h3>ju1234</h3>
        <input
          type="text"
          placeholder="account"
          value={account}
          onChange={changeAccount}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={changePassword}
        />
        <Button
          type="button"
          onClick={this.submitHandle}
          loading={submitting}
        >
          登录
        </Button>
      </form>
    )
  }
}

export default Login;
