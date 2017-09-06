/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
//================================================================
import Sider from '../components/Sider';
import Content from '../components/Content';
//================================================================
import setTitle from 'src/utils/setTitle';
import './layout.less';


export default class Home extends Component {
  componentWillMount() {
    setTitle('ju1234');
  }

  render() {
    return (
    // 小屏通过 layout-show-sider 控制sider显隐
      <div className="layout">
        <div className="layout-sider">
          <Sider/>
        </div>
        <div className="layout-content">
          <Content/>
        </div>
      </div>
    )
  }
}