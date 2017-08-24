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
import setTitle from 'src/utils/setTitle'
import './register-form.less';

function mapPropsToState(store) {
  return {
    registerState: store.registerState
  }
}

@inject(mapPropsToState)
@observer
class Register extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount(){
    setTitle('注册')
  }

  // 按下键盘enter事件
  keyDownHandle = (e) => {
    if(e.keyCode === 13){
      this.submitHandle()
    }
  };

  // 提交表单
  submitHandle = () => {
    this.props.registerState.submitHandle(this.context.router);
  };

  render() {
    const {
      account, password, phone, inputValue
    } = this.props.registerState;
    return (
      <form className="register-form" onKeyDown={this.keyDownHandle}>
        <div className="ju-logo"><img src="#" alt=""/></div>
        <h3>SIGN UP</h3>
        <input
          type="text"
          placeholder="Account"
          value={account}
          onChange={inputValue.bind(this,'account')}
        />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={inputValue.bind(this,'phone')}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={inputValue.bind(this,'password')}
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

export default Register;
