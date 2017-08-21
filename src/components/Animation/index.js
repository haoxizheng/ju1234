/**
 * intro：       animation component
 * description： animation component
 * author：      jufei
 * date：        2017/8/19
 */

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//=====================================================================================
import './animation.less';

export default class index extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="page-animation"
        transitionAppear={true}
        transitionAppearTimeout={700}
        transitionEnter={true}
        transitionEnterTimeout={700}
        transitionLeave={true}
        transitionLeaveTimeout={700}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}
