import React, { Component } from 'react'
import classnames from 'classnames'

class Banner extends Component {
  render() {
    const { bannerClass='banner-product', pic_title = 'image/product/title.png', title, sub_title, intra, btns=[], pic_banner="image/product/banner.png" } = this.props
    return (
      <div className={classnames("banner-container", bannerClass)}>
        <div className="w1200">
          <div className="banner-tit">
            <img src={pic_title} alt="云智慧" className="banner" />
          </div>
          <div className="banner-con">
            <div className="banner-left">
              <h3>
                产品中心
              </h3>
              <h2>
                { sub_title ? (<span>{sub_title}</span>) : null }
                {title}
              </h2>
              {
                intra ? (
                  <div className="banner-intra">
                    {intra}
                  </div>
                ) : null
              }
              <div className="banner-bottom">
                <a className="btn banner-service">
                  <span>马上咨询</span>
                  <i className="icon icon-bubble"></i>
                </a>
              </div>
            </div>
            <div className="banner-right">
              <img src={pic_banner} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner