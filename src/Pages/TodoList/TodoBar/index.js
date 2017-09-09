/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/7
 */

import React, {Component} from 'react';
// ============================================================
import './todo-bar.less';

export default class TodoBar extends Component {


  render() {
    if(this.props.done){
      return (
        <li className="todo-bar">
          <div className="todo-content">
            <div className="todo-done">
              <p>
                <s>do 干啥</s>
              </p>
              <time>
                <s>2012-12-12</s>
              </time>
            </div>
            <button>标记未完成</button>
          </div>
        </li>
      )
    }else {
      return (
        <li className="todo-bar">
          <div className="todo-content">
            <div className="todo-doing">
              <p>do something </p>
              <time>
                2012-12-12
              </time>
            </div>
            <button>修改</button>
            <button>完成</button>
          </div>
        </li>
      )
    }
  }
}
