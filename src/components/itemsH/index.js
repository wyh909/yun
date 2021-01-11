import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsH extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsH", moduleClass)}>
        {
          items.map((item, index) => {
            const { url, pic, title, text } = item
            return (
              <a href={ url } className="item" key={`_item_e_${index}`}>
                <div className="pic"><img src={ pic } alt="云智慧" /></div>
                <h4>{title}<i className="icon icon-more-blue"></i></h4>
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
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsH