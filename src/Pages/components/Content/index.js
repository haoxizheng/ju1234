/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
// =======================================================
import './content.less';

function mapStateToProps(store) {
  return {
    siderVisibleControl: store.siderState.visibleControl
  }
}

@inject(mapStateToProps)
@observer
class Content extends Component {

  openSider = () => {
    this.props.siderVisibleControl('open')
  };

  render() {
    return (
      <div className="jc-content">
        <div onClick={this.openSider}>openopenopenopenopenopenopenopenopenopen</div>
      </div>
    )
  }
}

export default Content;
