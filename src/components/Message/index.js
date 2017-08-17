/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/8/17
 */

import React, {Component} from 'react';
import {observer,inject} from 'mobx-react';
//===============================================================
import './message.less';


function mapPropsToState(store) {
  return {
    messageState: store.messageState
  }
}

@inject(mapPropsToState)
@observer
export default class Message extends Component {
  render() {
    const {messageList} = this.props.messageState;

    messageList.map( item => {
      console.log(item)
    });

    return (
      <ul className="message">
        {
          messageList.map( item => {
            return (
              <li key={item.id} className={item.type}>
                {
                  item.message
                }
              </li>
            )
          })
        }
      </ul>
    )
  }
}
