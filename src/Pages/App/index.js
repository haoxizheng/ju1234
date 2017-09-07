/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/17
 */

import React, {Component} from 'react';
import lazyLoad from 'src/utils/lazyLoad/index';
import {observer,inject} from 'mobx-react';
// ==============================================================================================================
import './app.less';

const Message = lazyLoad(require('bundle-loader?lazy&name=message!../../components/Message'));

function mapStateToProps(store) {
  log('store',store)
  return {
    loginValidity: store.userState.loginValidity
  }
}

@inject(mapStateToProps)
@observer
class App extends Component {

  componentDidMount(){
    this.props.loginValidity()
  }

  render() {
    return (
      <div className="jc-app">
        {this.props.children}
        <Message/>
      </div>
    )
  }
}

export default App;
