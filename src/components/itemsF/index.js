import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsE extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsE", moduleClass)}>
        {
          items.map((item, index) => {
            return (
              <a href={item.url} className="item" key={`_item_e_${index}`}>
                <h4>{item.title}</h4>
                <span className="icon icon-more-blue"></span>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsE