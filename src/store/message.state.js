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
      id: this.id,
      removing: false
    });
    this.messageList.reverse();
    setTimeout(this.clearMessage.bind(this,this.id,callback),time - 300);
    this.id++;
  };

  // 移除消息提示
  @action clearMessage = (id,callback) => {
    let index;

    for( let i = 0;i< this.messageList.length;i++){
      if(this.messageList[i].id === id){
        index = i;
        this.messageList[i].removing = true;
      }
    }
    setTimeout(() => {
      this.messageList = this.messageList.filter( item => item.id !== id)
    },300);

    if(callback) callback();
  }
}



export default new MessageState();



