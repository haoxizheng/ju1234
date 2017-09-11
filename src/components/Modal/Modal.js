/**
 * intro：       modal
 * description： modal component
 * author：      jufei
 * date：        2017/9/11
 */


import React, {Component} from 'react';
import classNames from 'classnames';
// =================================================================
import {Card} from 'jc';
// =================================================================
import './modal.less';


export default class Modal extends Component {

  // 关闭对话框
  close = () => {
    this.props.onClose();
  };

  render() {
    return (
      <div
        className={
          classNames('jc-modal', {
            'jc-modal-hide': !this.props.visible
          })
        }
      >
        <div className="jc-modal-cover" onClick={this.close}></div>
        <div
          className="jc-modal-content"
          style={{
            width: this.props.width,
            height: this.props.height
          }}
        >
          <Card
            title={this.props.title}
          >
            {
              this.props.children
            }
          </Card>
        </div>
      </div>
    )
  }
}
