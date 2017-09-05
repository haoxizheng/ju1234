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
    this.propsParse(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.propsParse(nextProps)
  }

  // 处理传入的props
  propsParse = (props) => {
    let {className,children,type,loading,model} = props;

    model = model === undefined ? '' : model;

    log('model',model)

    let classNameParse = className ? ` ${className}` :'';

    this.setState({
      children: loading ? <Loading type="wave"/> : children,
      type: type ? type : 'button',
      className: model + ' button' + classNameParse
    })
  };

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
        type={this.state.type}
      >
        {this.state.children}
      </button>
    )
  }
}
