import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsL extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsL", moduleClass)}>
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
                  <div className="item-left">0{index + 1}</div>
                  <div className="item-right" dangerouslySetInnerHTML={{__html: text}} ></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsL