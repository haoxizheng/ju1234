/**
 * intro：       sider.state
 * description： sider.state
 * author：      jufei
 * date：        2017/9/6
 */

import {action, computed, observable} from 'mobx';




class SiderState{
  // 小屏幕下sider是否可见
  @observable isVisible = false;


  @action init = () => {
    this.isVisible = false;
  };
  /**
   *
   * @param operate [open/close]
   * 小屏幕下打开或关闭侧栏
   */
  @action visibleControl = (operate) => {
    if(operate === 'open') this.isVisible = true;
    else if(operate === 'close') this.isVisible = false;
    else throw new Error('argument[0] must be "open" or "close"')
  }
}

export default new SiderState();