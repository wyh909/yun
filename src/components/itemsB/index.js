import React, {Component, Fragment} from 'react'
import classnames from 'classnames'

import Item from './../item'


class ItemsB extends Component{
  render() {
    const {  tips, items, moduleClass, picSize='m',
            intraB, itemsB, moduleClassB } = this.props
    return (
      <Fragment>
        <div className={classnames("items itemsB", moduleClass)}>
          {
            items.map((item, index) => {
              return (
                <Item key={`_item_${index}`} item={item} picSize={picSize} />
              )
            })
          }
          {
            tips ? (
              <div className="tips">{ tips }</div>
            ) : null
          }
        </div>
        {
          intraB ? (
            <div className="items-tit tc">
              { intraB }
            </div>
            ) : null
        }
        {
          itemsB ? (
            <div className={classnames("items itemsB", moduleClassB)}>
              {
                itemsB.map((item, index) => {
                  return (
                    <Item key={`_item_b_${index}`} item={item} picSize={picSize} />
                  )
                })
              }
            </div>
          ) : null
        }
      </Fragment>
    )
  }
}

export default ItemsB