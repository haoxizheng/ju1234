/**
 * intro：       sider nav
 * description： 侧栏导航
 * author：      jufei
 * date：        2017/9/6
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import classNames from 'classnames';
// ======================================================================
import './sider-nav.less';


function mapStateToProps(store) {
  return {
    siderLinks: store.siderState.siderLinks,
    setLinkActive: store.siderState.setLinkActive
  }
}

@inject(mapStateToProps)
@observer
class Nav extends Component {

  setLinkActive = () => {
    this.props.setLinkActive();
  };

  render() {
    const {siderLinks} = this.props;
    return (
      <div className="sider-nav">
        <ul>
          {
            siderLinks.map(link => {
              return (
                <li
                  className={
                    classNames({
                      "sider-nav-active": link.active
                    })
                  }
                  onClick={this.setLinkActive}
                  key={link.id}
                >
                  <Link to={link.url}>
                    {link.name}
                    <span>3</span>
                  </Link>
                </li>
              )
            })
          }
          {/*<li className="sider-nav-active">*/}
          {/*<Link to={pageUrls.HOME}>*/}
          {/*首页*/}
          {/*<span>3</span>*/}
          {/*</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<Link to={pageUrls.TODOLIST}>*/}
          {/*todo list*/}
          {/*<span>3</span>*/}
          {/*</Link>*/}
          {/*</li>*/}
        </ul>
      </div>
    )
  }
}

export default Nav;
