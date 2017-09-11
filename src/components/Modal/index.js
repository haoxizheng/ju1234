/**
 * intro：       index
 * description： index
 * author：      jufei
 * date：        2017/9/8
 */

import React, {Component} from 'react';
import {render} from 'react-dom';
// ================================================
import ModalComponent from './Modal';


const modalContainerId = 'jcModal';

export default class Modal extends Component {
  componentDidMount(){
    let jsModalElement = document.getElementById(modalContainerId);
    if(jsModalElement){
      this.initModal()
    }else {
      jsModalElement = document.createElement('div');
      jsModalElement.id = modalContainerId;
      document.body.appendChild(jsModalElement);
      this.initModal()
    }
  }

  initModal = () => {
    render((
      <ModalComponent {...this.props}/>
    ),document.getElementById(modalContainerId));
  };

  render() {
    return false
  }
}
