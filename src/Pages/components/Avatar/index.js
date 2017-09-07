/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
// ==================================================
import './avatar.less';

// todo 根据是否有头像判断是否展示

function mapStateToProps(store) {
  return {
    nickname: store.userState.nickname,
    avatar: store.userState.avatar,
  }
}

@inject(mapStateToProps)
@observer
class Avatar extends Component {
  render() {
    const {nickname,avatar} = this.props;

    return (
      <div className="sider-avatar">
        <Link to="/">
          <div className="sider-avatar-thumbnail">
            {avatar ? <img src={avatar} alt=""/> : <b>{nickname[0]}</b>}
          </div>
          <div className="sider-avatar-nickname">
            <strong>{nickname}</strong>
          </div>
        </Link>
      </div>
    )
  }
}

export default Avatar;
