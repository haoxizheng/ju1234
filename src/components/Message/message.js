/**
 * intro：       message
 * description： 添加message
 * author：      jufei
 * date：        2017/8/17
 */

import messageState from './message.state';

// 添加message
function addMessage(type) {
  return function () {
    const message = arguments[0];
    if (arguments.length === 1) {
      messageState.addMessage(message, type)
    } else if (arguments.length === 2) {
      if (/^\d+$/.test(arguments[1])) {
        messageState.addMessage(message, type, parseInt(arguments[1]))
      } else if (Object.prototype.toString.call(arguments[1]) === '[object Function]') {
        messageState.addMessage(message, type, 2000, arguments[1])
      } else {
        throw 'arguments type error'
      }
    } else if (arguments.length === 3) {
      if (/^\d+$/.test(arguments[1]) && Object.prototype.toString.call(arguments[2]) === '[object Function]') {
        messageState.addMessage(message, type, arguments[1], arguments[2])
      } else {
        throw 'arguments type error'
      }
    }
  }
}

export default {
  success: addMessage('success'),
  info: addMessage('info'),
  error: addMessage('error'),
  warn: addMessage('warn')
}
