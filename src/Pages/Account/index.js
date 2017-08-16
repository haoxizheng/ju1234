/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import lazyLoad from 'src/utils/lazyLoad';
//========================================================================
import * as pathUrls from 'src/config/pageUrls';
import './account.less';


const Login = lazyLoad(require('bundle-loader?lazy&name=login!./Login'));

export default class Account extends Component {
  render() {
    return (
      <div className="account">
        <div className="main-content">
          <Route exact path={pathUrls.LOGIN} component={Login}/>
        </div>
        <footer className="account-footer">
          <Link to="/">帮助</Link>
          <Link to="/">注册</Link>
          <Link to="/">帮助</Link>
        </footer>
      </div>
    )
  }
}

