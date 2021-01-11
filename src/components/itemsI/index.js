import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsI extends Component{
  render() {
    const { wrapClass } = this.props
    if(wrapClass.indexOf('swiper') > -1) {
      return (
        <div className="swiper-wrap">
          <div className="hd">
            <ul>
            </ul>
            <a className="icon icon-arrow-prev prev"></a>
            <a className="icon icon-arrow-next next"></a>
          </div>
          <div className="bd">
            {
              this.renderItems()
            }
          </div>
        </div> 
      )
    }

    return this.renderItems()

  }
  renderItems() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsI", moduleClass)}>
        {
          items.map((item, index) => {
            const { pic, title, text } = item
            return (
              <div className="item" key={`_item_e_${index}`}>
                <div className="pic"><img src={ pic } alt="云智慧" /></div>
                {
                  title ? (
                    <h4>{title}</h4>
                  ) : null
                }
                {
                  text ? (
                    <p className="text">
                      { 
                        text.indexOf('\\n') > -1 ? (
                          text.replace(/\\n/g, ' \n ')
                        ) : text
                      }
                    </p>
                  ) : null
                }
              </div>
            )
          })
        }
      </div>
    )
  }
  renderItem(item) {

  }
}

export default ItemsI