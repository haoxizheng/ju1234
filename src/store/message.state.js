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
    this.height = document.body.clientHeight || document.documentElement.clientHeight;
  }

  @computed get bottom(){
    const length = this.messageList.length;
    return (this.height - length * 50 ) + 'px';
  }

  // 添加消息提示
  @action addMessage = (message, type = 'success', time = 2000,callback) => {
    this.messageList.push({
      message,
      type: type,
      time: time,
      id: this.id
    });

    this.messageList.reverse();

    setTimeout(this.clearMessage.bind(this,this.id,callback),time);
    this.id++;
  };

  // 移除消息提示
  @action clearMessage = (id,callback) => {
    this.messageList = this.messageList.filter(message => message.id !== id);
    if(callback) callback();
  }
}



export default new MessageState();



