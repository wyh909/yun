import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsG extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsG", moduleClass)}>
        {
          items.map((item, index) => {
            const { pic, title, text } = item
            return (
              <div className="item" key={`_item_e_${index}`}>
                <div className="pic"><img src={ pic } alt="云智慧" /></div>
                <h4>{title}</h4>
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
}

export default ItemsG