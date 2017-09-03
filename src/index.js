/**
 * Created by jufei on 2017/6/12.
 *
 * 入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
// ==============================================================================================================
import Root from './Router';
import store from './store';
// ======================== ======================================================================================
import './style/index.less';
import './style/default.css';


window.log = console.log.bind(console);

render((
  <Provider {...store}>
    <Root/>
  </Provider>
), document.getElementById('root'));


if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept()
}
