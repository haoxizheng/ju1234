/**
 * Created by jufei on 2017/6/12.
 *
 * 入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// ==============================================================================================================
import Root from './Router';
import store from './store';
// ======================== ======================================================================================
import './style/index.less';
import './style/default.css';


render((
  <Provider {...store}>
    <Root/>
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}

//
// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {items: ['hello', 'world', 'click', 'me']};
//     this.handleAdd = this.handleAdd.bind(this);
//   }
//
//   handleAdd() {
//     const newItems = this.state.items.concat([
//       prompt('Enter some text')
//     ]);
//     this.setState({items: newItems});
//   }
//
//   handleRemove(i) {
//     let newItems = this.state.items.slice();
//     newItems.splice(i, 1);
//     this.setState({items: newItems});
//   }
//
//   render() {
//     const items = this.state.items.map((item, i) => (
//       <div key={item} onClick={() => this.handleRemove(i)}>
//         {item}
//       </div>
//     ));
//
//     return (
//       <div>
//         <button onClick={this.handleAdd}>Add Item</button>
//         <ReactCSSTransitionGroup
//           transitionName="example"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={300}>
//           {items}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// }
//
//
// render((
//   <TodoList/>
// ), document.getElementById('root'));
