import React, {Component, Fragment} from 'react'
import classnames from 'classnames'

class TabModule extends Component{
  render() {
    const { maintabs } = this.props
    return (
      <div className="outBox">
        { this.renderTabs('main', maintabs) }
        <div className="main-tabcon">
          <div className="bd aaa">
          {
            maintabs.map((maintab, index) => {
              return (
                <Fragment key={`_maintab_${index}`}>
                  {this.renderTabcon( maintab.tabcons)}
                </Fragment>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }

  renderTabs(type, tabs) {
    if(!tabs) {
      return null
    }
    const isMain = type === 'main'
    return (
      <div className={classnames(isMain ? "main-tabs hd" : "sub-tabs inHd")}>
        <ul>
          {
            tabs.map((tab, index) => {
              return (
                <li key={`_tab_${isMain ? 'main': 'sub'}_${index}`}>{ isMain ? (<i></i>) : null}{tab.name}</li>  
              )
            })
          }
        </ul>
      </div>
    )
  }

  renderTabcon(tabcon) {
    const { intra, subtabs } = tabcon
    return (
      <div className="main-item inBox">
        <div className="tabcon-title"> { intra } </div>
        <div className={classnames("tabcon-con", subtabs.length > 5 ? 'h500' : '')}>
          
          { this.renderTabs(false, subtabs) }
          <div className="sub-tabcon inBd">
            {
              subtabs.map((subtab, index) => {
                const { html } = subtab
                const isTextArray = html.text instanceof Array
                return (
                  <ul key={`_subtabcon_${index}`}>
                    <li className={classnames("sub-item", isTextArray ? 'sub-item-span' : '')}>
                    {
                      html.pic ? (
                        <div className="pic"><img src={ html.pic } /></div>
                      ) : null
                    } 
                    {
                      isTextArray ? html.text.map((t, index) => {
                        return <span key={`_span_t_${index}`}>{t}</span>
                      }) : <p className="text">{ html.text }</p>
                    }
                    </li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
      
    )
  }
}

export default TabModule