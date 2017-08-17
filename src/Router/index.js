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
const App = lazyLoad(require('bundle-loader?lazy&name=app!../components/App'));

// 主页
const Home = lazyLoad(require('bundle-loader?lazy&name=home!../Pages/Home'));

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
            <Route exact path={pageUrls.HOME} component={Home}/>
            <Route exact path={pageUrls.LOGIN} component={Account}/>
          </Switch>
        </App>
      </Router>
    )
  }
}


