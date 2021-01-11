import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerCon">
          <div className="footerList">
            <img src="image/index/footer_logo.png" alt="云智慧" className="footer_logo"/>
            <img src="image/index/erweima.png" alt="云智慧" className="footer_erweima"/>
            <p>
              <i className="iconfont iconweixin"></i>
              <span>cloudwise2014</span>
            </p>
          </div>
          <div className="footerList">
            <h4>行业解决方案</h4>
            <div className="content">
              <ul>
                <li>银行</li>
                <li>保险</li>
                <li>运营商</li>
                <li>交通</li>
              </ul>
              <ul>
                <li>证券</li>
                <li>政府</li>
                <li>电力</li>
                <li>制造</li>
              </ul>
            </div>
            <div className="contentMoblie">
              <ul>
                <li>银行</li>
                <li>保险</li>
                <li>运营商</li>
                <li>交通</li>
                <li>证券</li>
                <li>政府</li>
                <li>电力</li>
                <li>制造</li>
              </ul>
            </div>
          </div>
          <div className="footerList">
              <h4>产品</h4>
              <div className="content">
                <ul>
                  <li>智能运维(AIOps)</li>
                  <li>IT性能监控</li>
                  <li>应用性能管理</li>
                  <li>智能日志管理</li>
                </ul>
                <ul>
                  <li>智能业务运维平台</li>
                  <li>IT服务管理</li>
                  <li>配置管理(CMDB)</li>
                  <li>智慧变电站运维</li>
                </ul>
              </div>
              <div className="contentMoblie">
                <ul>
                  <li>智能运维(AIOps)</li>
                  <li>IT性能监控</li>
                  <li>应用性能管理</li>
                  <li>智能日志管理</li>
                  <li>智能业务运维平台</li>
                  <li>IT服务管理</li>
                  <li>配置管理(CMDB)</li>
                  <li>智慧变电站运维</li>
                </ul>
              </div>
            </div>
            <div className="footerList">
              <h4>云智慧</h4>
              <ul>
                <li>关于我们</li>
                <li>新闻动态</li>
                <li>招贤纳士</li>
                <li>联系我们</li>
              </ul>
            </div>
            <div className="footerList">
              <h4>服务支持</h4>
              <ul>
                  <li>销售咨询: sales@cloudwise.com</li>
                  <li>售后咨询: support@cloudwise.com</li>
                  <li>意见反馈: 400-666-1332</li>
                  <li>生态合作: bo@cloudwise.com</li>
              </ul>
            </div>
        </div>
        <div className="tort">
            <p>©版权所有2009-2020 云智慧（北京）科技有限公司 京ICP备09083760   京公网安备 11010502032537号。</p>
            <p>隐私声明</p>
        </div>
      </footer>
    )
  }
}

export default Footer