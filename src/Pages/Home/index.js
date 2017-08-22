/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//================================================================
import Animation from 'src/components/Animation';

export default class Home extends Component {
  state = {
    show: false
  };

  componentWillMount(){
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <Animation>
        {
          this.state.show && (
            <div>
              <Link to="/account/login">login</Link>
            </div>
          )
        }
      </Animation>
    )
  }
}
