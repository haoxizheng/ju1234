/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/17
 */

import React, {Component} from 'react';
import lazyLoad from 'src/utils/lazyLoad/index';
// ==============================================================================================================
import './app.less';

const Message = lazyLoad(require('bundle-loader?lazy&name=message!../../components/Message'));


class App extends Component {

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
