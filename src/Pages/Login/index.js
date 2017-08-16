/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
//========================================================================
import './login.less';

function mapPropsToState(store) {
  return {
    loginState: store.loginState
  }
}

@inject(mapPropsToState)
@observer
class Login extends Component {
  render() {
    const {account, password,submitHandle, submitting, changeAccount, changePassword} = this.props.loginState;
    return (
      <div className="login">
        <div className="main-content">
          <form className="login-form">
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
            <button
              type="button"
              className="login-submit"
              onClick={submitHandle}
            >登录</button>
          </form>
        </div>
        <footer className="login-footer">
          <Link to="/">帮助</Link>
          <Link to="/">注册</Link>
          <Link to="/">帮助</Link>
        </footer>
      </div>
    )
  }
}

export default Login;
