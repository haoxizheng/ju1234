/**
 * Created by jufei on 2017/8/15.
 */

import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import lazyLoad from 'src/utils/lazyLoad';
//========================================================================
//========================================================================
import * as pageUrls from 'src/config/pageUrls';
import './account.less';


const Login = lazyLoad(require('bundle-loader?lazy&name=login!./Login'));
const Register = lazyLoad(require('bundle-loader?lazy&name=login!./Register'));


export default class Account extends Component {

  render() {
    return (
      <div className="account">
        <div className="main-content" key="1" data-key="1">
          <Route exact path={pageUrls.LOGIN} component={Login}/>
          <Route exact path={pageUrls.REGISTER} component={Register}/>
        </div>
        <footer className="account-footer">
          <Route exact path={pageUrls.LOGIN} component={ _ => <Link to={pageUrls.REGISTER}>注册</Link>}/>
          <Route exact path={pageUrls.REGISTER} component={ _ => <Link to={pageUrls.LOGIN}>登录</Link>}/>
          <Link to="/">帮助</Link>
        </footer>
      </div>
    )
  }
}

