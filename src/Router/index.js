/**
 * intro：       route
 * description： react route
 * author：      jufei
 * date：        2017/8/15
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import lazyLoad from 'src/utils/lazyLoad';
//==============================================================================================================
//==============================================================================================================
import * as pageUrls from 'src/config/pageUrls';

// 顶层结构
const App = lazyLoad(require('bundle-loader?lazy&name=app!../Pages/App'));

// 侧栏加右边栏布局
const Layout = lazyLoad(require('bundle-loader?lazy&name=home!../Pages/Layout'));

// 登录
const Account = lazyLoad(require('bundle-loader?lazy&name=account!../Pages/Account'));


export default class Root extends Component {

  tokenValidity = () => {

  };

  render() {
    return (
      <Router

      >
        <App>
          <Switch>
            <Route exact path={pageUrls.HOME} component={Layout}/>

            {/* 用户账户、登录、登出 */}
            <Route exact path={pageUrls.ACCOUNT} component={Account}/>
          </Switch>
        </App>
      </Router>
    )
  }
}


