/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/5
 */

import React, {Component} from 'react';
//======================================================
import './card.less';

export default class Card extends Component {

  render() {
    let className = 'jc-card';
    if(this.props.className !== undefined){
      className += ` ${this.props.className}`
    }

    return (
      <div className={className}>
        {
          this.props.title && (
            <div className="jc-card-title">
              <strong>{this.props.title}</strong>
            </div>
          )
        }
        <div className="jc-card-content">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
