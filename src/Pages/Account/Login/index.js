/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
//========================================================================
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

  submitHandle = () => {
    this.props.loginState.submitHandle(this.context.router)
  };

  render() {
    const {
      account, password, submitHandle,
      changeAccount, changePassword
    } = this.props.loginState;
    return (
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
          onClick={this.submitHandle}
        >登录
        </button>
      </form>
    )
  }
}

export default Login;