import React, {Component, Fragment} from 'react'
import classnames from 'classnames'

class ItemsA extends Component{
  render() {
    const { items, moduleClass, hasBtn } = this.props
    return (
      <div className={classnames("items itemsA", moduleClass)}>
        {
          items.map((item, index) => {
            if(!item.title) {
              return null
            }
            return (
              <div className="item" key={`_item_a_${index}`}>
                {
                  (index % 2 === 0 || hasBtn) ? (
                    <div className="pic"><img src={ item.pic } alt="云智慧" /></div>
                  ) : null
                }
                <div className="info">
                  <h4>
                    { item.title }
                  </h4>
                  {
                    item.subs && item.subs.map((sub, idx) => {
                      return (
                        <Fragment key={`_sub_title_${index}`}>
                          <h5>{ sub.title }</h5>
                          <p className="text">{ sub.text }</p>
                        </Fragment>
                      )
                    })
                  }
                  {
                    item.text ? (
                      <p className="text">
                        <span>
                        { 
                          item.text.indexOf('\\n') > -1 ? (
                            item.text.replace(/\\n/g, ' \n')
                          ) : item.text
                        }
                        </span>
                        {
                          hasBtn ? (
                            <a href={item.url} className="btn"><span>马上试用</span> <i className="icon icon-more"></i></a>
                          ) : null
                        }
                      </p>
                    ) : null
                  }
                  {
                    item.tips ? (
                      <p className="tips" dangerouslySetInnerHTML={{__html: item.tips}}></p>
                    ) : null
                  }
                </div>
                {
                  index % 2 === 1 && !hasBtn ? (
                    <div className="pic"><img src={ item.pic } alt="云智慧" /></div>
                  ) : null
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsA