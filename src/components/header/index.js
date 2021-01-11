import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <a href=""><img src="image/common/logo.png" alt="云智慧" className="logo" /></a>
          <a href="">
              <span>解决方案</span>
              <i className="iconfont iconxingzhuangjiehe"></i>
          </a>
          <a href="">
              <span>产品中心</span>
              <i className="iconfont iconxingzhuangjiehe"></i>
          </a>
          <a href="">
              <span>客户成功</span>
              <i className="iconfont iconxingzhuangjiehe"></i>
          </a>
          <a href="">
              <span>合作伙伴</span>
          </a>
          <a href="">
              <span>关于我们</span>
              <i className="iconfont iconxingzhuangjiehe"></i>
          </a>
        </nav>
        <div className="login">
            <i className="iconfont iconsousuo search"></i>
            <p>登录</p>
            <p>注册</p>
        </div>
      </header>
    )
  }
}

export default Header