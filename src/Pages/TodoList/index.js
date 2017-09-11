/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/7
 */

import React, {Component} from 'react';
// ======================================================
import {Modal} from 'jc';
// ======================================================
import setTitle from 'src/utils/setTitle';
import lazyLoad from 'src/utils/lazyLoad';
import './todoList.less';


const TodoBar  = lazyLoad(require('bundle-loader?lazy&name=todoBar!./TodoBar'));
const TodoCreate  = lazyLoad(require('bundle-loader?lazy&name=todoCreate!./TodoCreate'));

class TodoList extends Component {

  componentWillMount(){
    setTitle('todo list')
  }

  render() {
    return (
      <div className="todo-list-wrap">
        <div className="todo-container">
          <ul>
            <TodoBar done/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar done/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
            <TodoBar/>
          </ul>
        </div>
        <button
          className="crete-todo-btn"
        >
        </button>
        <TodoCreate/>
      </div>
    )
  }
}


export default TodoList;
