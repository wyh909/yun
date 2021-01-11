import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsM extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsM", moduleClass)}>
        {
          items.map((item, index) => {
            const { title, text } = item
            return (
              <div className="item" key={`_item_k_${index}`}>
                {
                  title ? (
                    <h4>{title}</h4>
                  ) : null
                }
                {
                  text ? (
                    <div className="text" dangerouslySetInnerHTML={{__html: text}} ></div>
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

export default ItemsM