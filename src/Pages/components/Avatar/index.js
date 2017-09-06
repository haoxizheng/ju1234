/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// ==================================================
import './avatar.less';

// todo 根据是否有头像判断是否展示

export default class Avatar extends Component {
  render() {
    return (
      <div className="sider-avatar">
        <Link to="/">
          <div className="sider-avatar-thumbnail">
            <img src="" alt=""/>
          </div>
          <div className="sider-avatar-nickname">
            <strong>hello world</strong>
          </div>
        </Link>
      </div>
    )
  }
}
