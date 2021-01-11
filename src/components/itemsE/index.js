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
              <div className="item" key={`_item_e_${index}`}>
                <div className="pic"><img src={item.pic} alt="云智慧" /></div>
                <div className="info">
                  <p className="text">{item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsE