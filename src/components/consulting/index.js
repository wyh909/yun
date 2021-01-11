import React, {Component} from 'react'
import classnames from 'classnames'

class Consulting extends Component{
  render() {
    const { text, url } = this.props
    if(!text) {
      return null
    }
    return (
      <div className="consulting">
        <p>{text}</p>
        <div className="btns">
          <a href={url} className="btn">
              <span>马上咨询</span>
              <i className="icon icon-bubble-blue"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Consulting