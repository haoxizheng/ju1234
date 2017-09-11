/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/7
 */

import React, {Component} from 'react';
// ====================================================
import setTitle from 'src/utils/setTitle';

export default class Home extends Component {

  componentDidMount(){
    setTitle('ju1234');
  }

  render() {
    return <div>h o m e</div>
  }
}
