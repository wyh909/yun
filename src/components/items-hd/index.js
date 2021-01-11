import React, {Component} from 'react'


class ItemsHD extends Component{
  constructor(props) {
    super(props)

  }
  render() {
    const { title, intra } = this.props
    return (
      <div className="item-hd">
        <h3>{ title }</h3>
        <img src="image/index/solutionSub.png" alt="云智慧" className="dot-line" />
        {
          intra ? (
          <div className="items-tit tc">
            { intra }
          </div>
          ) : null
        }
      </div>
    )
  }
}

export default ItemsHD