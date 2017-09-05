/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//================================================================
import {Card} from 'jc';
//================================================================
import setTitle from 'src/utils/setTitle';
import './home.less'


export default class Home extends Component {
  componentWillMount(){
    setTitle('ju1234');
  }

  render() {
    return (
      <div className="home">
        <Link to="/account/login">login</Link>
        <br/>
        <a href="http://ju1234.me/todoList/">todo list</a>
        <br/>
        <a href="#">blog</a>
        <Card
          title="你好"
          content="content"
        />
      </div>
    )
  }
}
