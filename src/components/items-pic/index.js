import React, {Component} from 'react'
import classnames from 'classnames'

import ItemHD from './../items-hd'


class ItemsPic extends Component{
  render() {
    const { pic, moduleClass } = this.props
    return (
      <div className={classnames("items itemsPic", moduleClass)}>
        <div className="pic"><img src={pic} alt="云智慧" /></div>
      </div>
    )
  }
}

export default ItemsPic