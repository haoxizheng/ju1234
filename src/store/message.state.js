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
 *  {
 *    type: 'warn',
 *    time: 1500,
 *    message: 'some message'
 *  }
 */
class MessageState {
  @observable messageList = [];


  constructor() {
    this.id = 0;
  }

  // 添加消息提示
  @action addMessage = (message, type = 'success', time = 1000) => {
    this.messageList.push({
      message,
      type: type,
      time: time,
      id: this.id
    });

    setTimeout(this.clearMessage.bind(this,this.id),time);
    this.id++;
  };

  // 移除消息提示
  @action clearMessage = (id) => {
    this.messageList = this.messageList.filter(message => message.id !== id)
  }
}



export default new MessageState();



