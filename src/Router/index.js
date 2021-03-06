/**
 * intro：       route
 * description： react route
 * author：      jufei
 * date：        2017/8/15
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import lazyLoad from 'src/utils/lazyLoad';
import {observer,inject} from 'mobx-react';
//==============================================================================================================
//==============================================================================================================
import * as pageUrls from 'src/config/pageUrls';

// 顶层结构
const App = lazyLoad(require('bundle-loader?lazy&name=app!../Pages/App'));

// 侧栏加右边栏布局
const Layout = lazyLoad(require('bundle-loader?lazy&name=layout!../Pages/Layout'));

// 登录
const Account = lazyLoad(require('bundle-loader?lazy&name=account!../Pages/Account'));

function mapStateToProps(store) {
  return {
    loginValidity: store.userState.loginValidity
  }
}

@inject(mapStateToProps)
@observer
class Root extends Component {

  componentDidMount(){
    // 登录状态初始化
    this.props.loginValidity()
  }

  tokenValidity = () => {

  };


  render() {
    return (
      <Router

      >
        <App>
          <Switch>
            <Route exact path={pageUrls.LAYOUT} component={Layout}/>

            {/* 用户账户、登录、登出 */}
            <Route exact path={pageUrls.ACCOUNT} component={Account}/>
          </Switch>
        </App>
      </Router>
    )
  }
}


export default Root;


