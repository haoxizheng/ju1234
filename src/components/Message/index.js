/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/17
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Animation from '../Animation';
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
    const {messageList} = this.props.messageState;

    return (
      <ul className="message">
        <Animation>
          {
            messageList.map(item => {
              return (
                <li key={item.id} style={{top: item.top}}>
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
        </Animation>
      </ul>
    )
  }
}
