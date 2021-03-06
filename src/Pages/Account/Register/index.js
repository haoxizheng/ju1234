/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
//========================================================================
import {Input,Button} from 'jc';
//========================================================================
import setTitle from 'src/utils/setTitle';
import './register-form.less';

function mapPropsToState(store) {
  return {
    registerState: store.registerState,
    submitHandle: store.registerState.submitHandle,
    userState: store.userState
  }
}

@inject(mapPropsToState)
@observer
class Register extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    setTitle('注册')
  }

  componentWillUnmount() {
    this.props.registerState.init()
  }

  // 按下键盘enter事件
  keyDownHandle = (e) => {
    if (e.keyCode === 13) {
      this.submitHandle()
    }
  };

  // 提交表单
  submitHandle = () => {
    this.props.submitHandle(this.context.router, this.props.userState);
  };

  render() {
    log(this.props)
    const {
      account, password, phone, inputValue, inputState, submitting
    } = this.props.registerState;

    return (
      <form className="register-form" onKeyDown={this.keyDownHandle}>
        <div className="ju-logo"><img src="#" alt=""/></div>
        <h3>SIGN UP</h3>
        <Input
          type="text"
          placeholder="Account"
          value={account}
          onChange={inputValue.bind(this, 'account')}
          className={inputState.account}
        />
        <Input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={inputValue.bind(this, 'phone')}
          className={inputState.phone}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={inputValue.bind(this, 'password')}
          className={inputState.password}
        />
        <Button
          type="button"
          onClick={this.submitHandle}
          loading={submitting}
          model="primary"
        >
          注册
        </Button>
      </form>
    )
  }
}

export default Register;
