/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
      <div className="layout">
        <Sider/>
        <Content/>
      </div>
    )
  }
}
