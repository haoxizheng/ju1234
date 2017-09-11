/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/11
 */

import React, {Component} from 'react';
import classNames from 'classnames';
// =============================================
import './input.less';

export default class index extends Component {

  render() {
    return (
      <input
        type="text"
        {...this.props}
        className={classNames(
          'jc-input',
          this.props.className
        )}
      />
    )
  }
}
