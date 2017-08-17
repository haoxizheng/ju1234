/**
 * intro：       message
 * description： 添加message
 * author：      jufei
 * date：        2017/8/17
 */

import store from '../store';

const {messageState} = store;


console.log('messageState', messageState);

// 参数验证
function validityArguments(message, time) {
  if (message === undefined)
    throw 'argument can not be empty';
  else if (message === '')
    throw 'message length must be greater than 0';
  else if (Object.prototype.toString.call(time) !== '[object Number]')
    throw 'time must be the number type';

}


function success(message, time) {
  validityArguments(message, time);
  messageState.addMessage(message,'success',time);
}

function info(message, time) {
  validityArguments(message, time);
  messageState.addMessage(message,'info',time);
}

function error(message, time) {
  validityArguments(message, time);
  messageState.addMessage(message,'error',time);
}

function warn(message, time) {
  validityArguments(message, time);
  messageState.addMessage(message,'warn',time);
}


export default {
  success,
  info,
  error,
  warn
}
