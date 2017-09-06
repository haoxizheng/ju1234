/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {observer,inject} from 'mobx-react'
import classNames from 'classnames';
//================================================================
import Sider from '../components/Sider';
import Content from '../components/Content';
//================================================================
import setTitle from 'src/utils/setTitle';
import './layout.less';

function mapStateToProps(store) {
  return {
    siderIsVisible: store.siderState.isVisible,
    siderVisibleControl: store.siderState.visibleControl
  }
}


@inject(mapStateToProps)
@observer
class Home extends Component {
  componentWillMount() {
    setTitle('ju1234');
  }

  // 小屏下sider展开的覆盖层点击事件
  siderCoverClickhandle = (e) => {
    if(e.target.classList.contains('layout-sider')){
      this.props.siderVisibleControl('close');
    }
  };

  render() {
    const className = classNames('layout',{
      'layout-show-sider': this.props.siderIsVisible
    });
    return (
      <div className={className}>
        <div className="layout-sider" onClick={this.siderCoverClickhandle}>
          <Sider/>
        </div>
        <div className="layout-content">
          <Content/>
        </div>
      </div>
    )
  }
}

export default Home;
