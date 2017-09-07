/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Search} from 'jc';
// =======================================================
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
        <div className="jc-content-header">
          <div onClick={this.openSider} className="sider-open-btn">

          </div>
          <div className="content-header-search">
            <Search/>
          </div>
        </div>
        <main>
          {
            this.props.children
          }
        </main>
      </div>
    )
  }
}

export default Content;
