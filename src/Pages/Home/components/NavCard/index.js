/**
 * intro：       首页导航卡片
 * description： index
 * author：      jufei
 * date：        2017/9/5
 */

import React, {Component} from 'react';
// ============================================================
import {Card} from 'jc';
// ============================================================
import './nav-card.less';

export default class index extends Component {
  render() {
    log('props', this.props);

    const {img,name,link} = this.props;

    return (
      <Card className="nav-card">
        <a href={link}>
          <div className="nav-card-banner">
            <img src={img.src} alt={img.alt} title={img.title}/>
          </div>
          <div className="nav-card-title">
            <strong>{name}</strong>
          </div>
        </a>
      </Card>
    )
  }
}
