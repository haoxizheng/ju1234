/**
 * intro：       loading component
 * description： loading component
 * author：      jufei
 * date：        2017/8/25
 */

import React, {Component} from 'react';
import './loading-circle.less'

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-circle-wrap">
        <div className="loading-child"></div>
        <div className="loading-child"></div>
      </div>
    )
  }
}
