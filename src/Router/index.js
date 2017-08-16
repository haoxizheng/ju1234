/**
 * intro：       route
 * description： react route
 * author：      jufei
 * date：        2017/8/15
 */

import React,{Component} from 'react';
import {BrowserRouter as Router, HashRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import lazyLoad from 'src/utils/lazyLoad';
//==============================================================================================================

//==============================================================================================================
import * as pageUrls from 'src/config/pageUrls';

// 主页
const Home = lazyLoad(require('bundle-loader?lazy&name=home!../Pages/Home'));

// 登录
const Login = lazyLoad(require('bundle-loader?lazy&name=login!../Pages/Login'));


export default class Root extends Component{

  tokenValidity = () => {

  };

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path={pageUrls.HOME} component={Home}/>
          <Route exact path={pageUrls.LOGIN} component={Login}/>
        </Switch>
      </Router>
    )
  }
}


