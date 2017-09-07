/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
// ====================================================================
import Avatar from '../Avatar';
import SiderNav from '../SiderNav';
// ====================================================================
import * as pageUrl from 'src/config/pageUrls';
import './sider.less';


function mapStateToProps(store) {
  return {
    siderVisibleControl: store.siderState.visibleControl,
    userState: store.userState
  }
}

@inject(mapStateToProps)
@observer
class Sider extends Component {

  // 小屏下 关闭sider
  closeSider = () => {
    this.props.siderVisibleControl('close');
  };

  // 退出登录
  logout = () => {
    this.props.userState.logout()
  };

  render() {
    const {userState} = this.props;

    return (
      <div className="jc-sider">
        <div>
          <Avatar/>
        </div>
        <nav>
          <SiderNav/>
        </nav>
        <div className="jc-sider-operator">
          {
            userState.isLogin ? (
              <div className="sider-is-login" onClick={this.logout}>
                <button>
                  <i className="logout-icon">
                  </i>
                  退出登录
                </button>
              </div>
            ) : (
              <div className="sider-not-login">
                <Link to={pageUrl.LOGIN}>登录</Link>
                <Link to={pageUrl.REGISTER}>注册</Link>
              </div>
            )
          }
        </div>
        <button
          className="sider-close"
          onClick={this.closeSider}
        >&times;</button>
      </div>
    )
  }
}

export default Sider;
