/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//================================================================
import NavCard from './components/NavCard';
//================================================================
import setTitle from 'src/utils/setTitle';
import './home.less';


export default class Home extends Component {
  componentWillMount() {
    setTitle('ju1234');
  }

  render() {
    return (
      <div className="home">
        <header>
          <div className="header-operate">
            <Link to="/account/login">login</Link>
            <Link to="/account/register">sign up</Link>
          </div>
        </header>
        <div className="nav-group">
          <NavCard
            img={{
              src: 'http://otjt19rhq.bkt.clouddn.com/wallhaven-63202.png',
              alt: 'todo list',
              title: 'todo list'
            }}
            name="TODO LIST"
            link="http://ju1234.me/todoList"
          />
        </div>
      </div>
    )
  }
}
