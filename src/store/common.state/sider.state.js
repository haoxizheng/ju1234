/**
 * intro：       sider.state
 * description： sider.state
 * author：      jufei
 * date：        2017/9/6
 */

import {action, computed, observable} from 'mobx';
// ===============================================================
import {message} from 'jc';
// ===============================================================
import API from 'root/service/API';
import ajax from 'src/utils/request';


class SiderState{
  // 小屏幕下sider是否可见
  @observable isVisible = false;
  // 链接列表
  @observable siderLinks = [];

  @action init = () => {
    this.isVisible = false;
    this.getSiderLinks()
  };

  @action setLinkActive = () => {
    const pathname = location.pathname;
    this.siderLinks = this.siderLinks.map(link => {
      link.active = false;
      if(pathname === '/' && link.url === '/'){
        link.active = true;
      }else if(pathname !== '/' && link.url.startsWith(pathname)){
        link.active = true;
      }
      return link
    });
  };

  // 获取链接列表
  @action getSiderLinks = () => {
    ajax.Get(API.GET_SIDER_LINK)
      .retry(3)
      .subscribe(
        res => {
          if(res.data.code === 200){
            this.siderLinks = res.data.data;
            this.setLinkActive()
          }else if(res.data.code === 400){
            message.error(res.data.message)
          }
        }
      )
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
