import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsC extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsC", moduleClass)}>
        {
          items.map((item, index) => {
            if(!item) {
              return null
            }
            return (
              <div className="item" key={`_item_c_${index}`}>
                <div className="pic"><img src={item.pic} alt="云智慧" /></div>
                <div className="info">
                  <h4>{item.title}</h4>
                  {
                    item.isTurn ? (
                      <p className="text">{item.text}<span>{item.span}</span></p>
                    ) : (
                      <p className="text"><span>{item.span}</span>{item.text}</p>
                    )
                  }
                  
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsC