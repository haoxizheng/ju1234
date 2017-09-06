/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// ====================================================================
import Avatar from '../Avatar';
import SiderNav from '../SiderNav';
// ====================================================================
import * as pageUrl from 'src/config/pageUrls';
import './sider.less';

// todo 登录状态最底部显示退出，未登录则显示 登录注册
export default class Sider extends Component {
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
        <button className="sider-close">&times;</button>
      </div>
    )
  }
}
