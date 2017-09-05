/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
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
        {/*<Link to="/account/login">login</Link>*/}
        {/*<br/>*/}
        {/*<a href="http://ju1234.me/todoList/">todo list</a>*/}
        {/*<br/>*/}
        {/*<a href="#">blog</a>*/}
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
          {/*<NavCard*/}
            {/*img="asdds"*/}
            {/*navName="TODO LIST"*/}
          {/*/>*/}
          {/*<NavCard*/}
            {/*img="asdds"*/}
            {/*navName="TODO LIST"*/}
          {/*/>*/}
          {/*<NavCard*/}
            {/*img="asdds"*/}
            {/*navName="TODO LIST"*/}
          {/*/>*/}
          {/*<NavCard*/}
            {/*img="asdds"*/}
            {/*navName="TODO LIST"*/}
          {/*/>*/}
        </div>
      </div>
    )
  }
}
