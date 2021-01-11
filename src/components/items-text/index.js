import React, {Component} from 'react'
import classnames from 'classnames'

import ItemHD from './../items-hd'


class ItemsText extends Component{
  render() {
    const { title, intra, text, moduleClass, bgColor='' } = this.props
    return (
      <div className={classnames("detail-item", bgColor)}>
        <div className="w1200">
          <ItemHD title={title} intra={intra} />
          <div className={classnames("itemsText", moduleClass)}>
            { text }
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsText