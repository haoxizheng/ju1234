/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
// ====================================================
import './search.less';


export default class Search extends Component {
  render() {
    return (
      <div className="jc-search">
        <input type="text" placeholder="想要搜索的内容"/>
        {/*classname: 已点击搜索按钮为searching，未点击搜索按钮pending*/}
        <span className="search-pending"></span>
      </div>
    )
  }
}
