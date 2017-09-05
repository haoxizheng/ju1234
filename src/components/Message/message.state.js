/**
 * intro：       message.state
 * description： message.state
 * author：      jufei
 * date：        2017/8/17
 */

import {action, computed, observable} from 'mobx';


/**
 *  text time
 *  type: error success info warn
 *
 */
class MessageState {
  @observable messageList = [];

  constructor() {
    this.id = 0;
    this.count = 0;
  }


  // 添加消息提示
  @action addMessage = (message, type = 'success', time = 2000, callback) => {
    this.count = this.messageList.length > 0 ? this.count + 1 : 0;
    this.messageList.push({
      message,
      type: type,
      time: time,
      id: this.id,
      removing: false,
      top: this.count * 50 + 'px'
    });
    setTimeout(this.clearMessage.bind(this, this.id, callback), time);
    this.id++;
  };

  // 移除消息提示
  @action clearMessage = (id, callback) => {
    this.messageList = this.messageList.filter(item => item.id !== id);
    if (callback) callback();
  }
}


export default new MessageState();



