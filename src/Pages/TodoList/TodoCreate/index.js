/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/11
 */

import React, {Component} from 'react';
// ======================================================
import {Modal} from 'jc';
// ======================================================

export default class TodoCreate extends Component {
  render() {
    return (
      <Modal
        title="新建事件"
        visible={true}
      />
    )
  }
}
