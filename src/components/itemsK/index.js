import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsK extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsK", moduleClass)}>
        {
          items.map((item, index) => {
            const { title, text_arr } = item
            return (
              <div className="item" key={`_item_k_${index}`}>
                {
                  title ? (
                    <h4>{title}</h4>
                  ) : null
                }
                {
                  text_arr ? (
                    <ul>
                      { 
                        text_arr.map((text, idx) => {
                          return <li key={`_item_k_t_${idx}`}>{ text }</li>
                        })
                      }
                    </ul>
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

export default ItemsK