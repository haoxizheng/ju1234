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
const Login = lazyLoad(require('bundle-loader?lazy&name=Login!../Pages/Login'));
//==============================================================================================================
import * as pageUrls from 'src/config/pageUrls';

export default class Root extends Component{

  tokenValidity = () => {

  };

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path={pageUrls.LOGIN} component={Login}/>
        </Switch>
      </Router>
    )
  }
}
