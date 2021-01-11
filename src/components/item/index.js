import React, {Component} from 'react'
import classnames from 'classnames'

class Item extends Component{
  render() {
    const { item, picSize='s' } = this.props
    if(!item) {
      return null
    }
    const { pic, title, text, tips, more } = item
    return (
      <div className={classnames("item", picSize=='s' ? 'item-s' : '')}>
        <div className={classnames("pic", picSize)}><img src={ pic } alt="云智慧" /></div>
        <div className="info">
          {
            title ? (
              <h4>{ title }</h4>
            ) : null
          }
          {
            text ? (
              <p className="text">
                { 
                  text.indexOf('\\n') > -1 ? (
                    text.replace(/\\n/g, ' \n ')
                  ) : (text) 
                }
              </p>
            ) : null
          }
          {
            more ? (
              <a className="more" href={more.url}>{more.text}<i className="icon icon-more"></i></a>
            ) : null
          }
          {
            tips ? (
              <p className="tips">{ tips }</p>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default Item