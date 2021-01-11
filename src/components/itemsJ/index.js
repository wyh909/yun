import React, {Component} from 'react'
import classnames from 'classnames'


class ItemsJ extends Component{
  render() {
    const { items, moduleClass } = this.props
    return (
      <div className={classnames("items itemsJ", moduleClass)}>
        {
          items.map((item, index) => {
            const { pic, picSize, title, text_arr } = item
            return (
              <div className="item" key={`_item_j_${index}`} style={{backgroundImage: `url(${pic})`, backgroundSize: picSize}}>
                <div className="item-box">
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
                            return <li key={`_text_j_t_${idx}`}>{ text }</li>
                          })
                        }
                      </ul>
                    ) : null
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

export default ItemsJ