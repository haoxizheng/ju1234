/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/17
 */

import React, {Component} from 'react';
import {observer,inject} from 'mobx-react';
//===============================================================
import messageState from './message.state';
import './message.less';


function mapPropsToState() {
  return {
    messageState: messageState
  }
}

@inject(mapPropsToState)
@observer
export default class Message extends Component {

  render() {
    const {messageList,bottom} = this.props.messageState;

    return (
      <ul className="message" style={{bottom: bottom}}>
        {
          messageList.map( item => {
            return (
              <li key={item.id}>
                <span
                  className={item.type + ' message-item'}
                  style={{
                    opacity: item.removing ? 0 : 1
                  }}
                >
                  {
                    item.message
                  }
                </span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
