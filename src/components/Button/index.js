/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/25
 */

import React, {Component} from 'react';
import Loading from 'jc/Loading'
//========================================================


import './button.less'
export default class Button extends Component {
  state = {
    className: ''
  };

  componentWillMount(){
    let className = 'button ' + this.props.className;
    let children = this.props.loading ? <Loading type="wave"/> : this.props.children;
    this.setState({
      className,
      children
    })
  }

  // loading状态使button点击事件失效
  clickHandle = (e) => {
    if(this.props.loading){
      e.preventDefault();
      e.stopPropagation();
      return false
    }else {
      this.props.onClick()
    }
  };

  render() {
    return (
      <button
        className={this.state.className}
        onClick={this.clickHandle}
      >
        {this.state.children}
      </button>
    )
  }
}
