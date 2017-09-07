/**
 * intro：       sider nav
 * description： 侧栏导航
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as pageUrls from 'src/config/pageUrls';
// ======================================================================
import './sider-nav.less';

export default class Nav extends Component {
  render() {
    return (
      <div className="sider-nav">
        <ul>
          <li className="sider-nav-active">
            <Link to={pageUrls.HOME}>
              首页
              <span>3</span>
            </Link>
          </li>
          <li>
            <Link to={pageUrls.TODOLIST}>
              todo list
              <span>3</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
