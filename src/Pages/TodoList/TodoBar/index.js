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
    return (
      <li className="todo-bar">
        <div>
          <span className="todo-desc">a todo </span>
          <button>修改</button>
          <button>完成</button>
        </div>
        <time>
          asds
        </time>
      </li>
    )
  }
}
