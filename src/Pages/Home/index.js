/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/16
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//================================================================

export default class Home extends Component {

  render() {
    return (
      <div>
        <Link to="/account/login">login</Link>
      </div>
    )
  }
}
