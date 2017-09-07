/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Route} from 'react-router-dom';
import classNames from 'classnames';
//================================================================
import Sider from '../components/Sider';
import Content from '../components/Content';
//================================================================
import setTitle from 'src/utils/setTitle';
import * as pageUrls from 'src/config/pageUrls';
import lazyLoad from 'src/utils/lazyLoad';
import './layout.less';

// 页面组件
const Home = lazyLoad(require('bundle-loader?lazy&name=home!../Home'));


function mapStateToProps(store) {
  return {
    siderIsVisible: store.siderState.isVisible,
    siderVisibleControl: store.siderState.visibleControl,
    siderInit: store.siderState.init
  }
}

@inject(mapStateToProps)
@observer
class Layout extends Component {
  componentWillMount() {
    setTitle('ju1234');
    this.props.siderInit();
  }

  // 小屏下sider展开的覆盖层点击事件
  siderCoverClickhandle = (e) => {
    if (e.target.classList.contains('layout-sider')) {
      this.props.siderVisibleControl('close');
    }
  };

  render() {
    const className = classNames('layout', {
      'layout-show-sider': this.props.siderIsVisible
    });
    return (
      <div className={className}>
        <div className="layout-sider" onClick={this.siderCoverClickhandle}>
          <Sider/>
        </div>
        <div className="layout-content">
          <Content>
            <Route exact path={pageUrls.HOME} component={Home}/>
          </Content>
        </div>
      </div>
    )
  }
}

export default Layout;
