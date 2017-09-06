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
    siderVisibleControl: store.siderState.visibleControl
  }
}

@inject(mapStateToProps)
@observer
class Sider extends Component {

  // 小屏下 关闭sider
  closeSider = () => {
    this.props.siderVisibleControl('close');
  };

  render() {
    return (
      <div className="jc-sider">
        <div>
          <Avatar/>
        </div>
        <nav>
          <SiderNav/>
        </nav>
        <div className="jc-sider-operator">
          <div className="sider-not-login">
            <Link to={pageUrl.LOGIN}>登录</Link>
            <Link to={pageUrl.REGISTER}>注册</Link>
          </div>
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
