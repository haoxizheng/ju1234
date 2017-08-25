/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//================================================================
import setTitle from 'src/utils/setTitle';
import Loading from 'src/components/Loading/index'


export default class Home extends Component {
  componentWillMount(){
    setTitle('ju1234');
  }

  render() {
    return (
      <div>
        <Link to="/account/login">login</Link>
        <br/>
        <Loading/>
        <a href="http://ju1234.me/todoList/">todo list</a>
      </div>
    )
  }
}
