/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// ======================================================================
import './sider-nav.less';

export default class Nav extends Component {
  render() {
    return (
      <div className="sider-nav">
        <ul>
          <li>
            <Link to="/account/login">
              todo list
              <span>3</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
