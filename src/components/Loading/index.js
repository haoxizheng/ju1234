/**
 * intro：       Loading component
 * description： Loading component
 * author：      jufei
 * date：        2017/8/25
 */

import React,{Component} from 'react';
//============================================================
import LoadingCircle from './Circle';
import LoadingWave from './Wave';

export default class Loading extends Component{

  render(){
    const type = this.props.type;
    let Loading = LoadingCircle;

    if(type === 'wave'){
      Loading = LoadingWave;
    }
    return <Loading />;
  }
}
