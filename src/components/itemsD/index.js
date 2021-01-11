import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsD extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsD", moduleClass)}>
        {
          items.map((item, index) => {
            return (
              <div className="item" key={`_item_${moduleClass}_${index}`}>
                <div className="pic">
                  <img src={ item.pic } alt="云智慧" />
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsD