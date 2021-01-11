import React, {Component} from 'react'
import classnames from 'classnames'

import ItemsA from '../itemsA'
import ItemsB from '../itemsB'
import ItemsC from '../itemsC'
import ItemsD from '../itemsD'
import ItemsE from '../itemsE'
import ItemsF from '../itemsF'
import ItemsG from '../itemsG'
import ItemsH from '../itemsH'
import ItemsI from '../itemsI'
import ItemsJ from '../itemsJ'
import ItemsK from '../itemsK'
import ItemsL from '../itemsL'
import ItemsM from '../itemsM'
import ItemsPic from '../items-pic'
import ItemsText from '../items-text'
import TabModule from '../tab-module'
import Consulting from '../consulting'

class RenderPage extends Component{
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="detail-container">
        {this.renderIntra()}
        {this.renderModules()}
      </div>
    )
  }

  renderIntra() {
    const { intra } = this.props.data
    if(!intra) {
      return null
    }
    return (
      <div className="detail-con detail-intra">
        <div className="w1200">
          <p className={classnames('tc', intra.width)}>
            { 
              intra.text.indexOf('\\n') > -1 ? 
              (
                intra.text.replace(/\\n/g, '\n')
              ) : (
                intra.text
              )
            }
          </p>
          {
            intra.pic ? (
              <p className="pic"><img src={intra.pic} /></p>  
            ) : null
          }
        </div>
      </div>
    )
  }

  renderModules() {
    const { modules } = this.props.data
    return (
      modules.map((module, index) => {
        if(module.name === 'consulting') {
          return (
            <Consulting {...module} key={`_module_${index}`} />
          )
        }else if(module.name === 'only-text') {
          return (
            <div className={classnames("detail-item", module.wrapClass)} key={`_module_${index}`}>
              <div className="w1200 only-text">
                <p className={classnames("only-text", module.moduleClass)}>{module.text}</p>
              </div>
            </div>
          )
        }else if(module.name === 'only-pics') {
          return (
            <div className={classnames("detail-item", module.wrapClass)} key={`_module_${index}`}>
              <div className="w1200">
                <div className={classnames("only-pics", module.moduleClass)} style={{width: module.picSize}}>
                {
                  module.pics.map((pic, idx) => {
                    return <p style={{width: pic.width || '100%'}} key={`_only_pic_${idx}`}><img src={pic.url} alt="云智慧" /></p>
                  })
                }
                </div>
              </div>
            </div>
          )
        }
        const { title, intra, intraPic } = module
        return(
          <div className={classnames("detail-item", module.wrapClass)} key={`_module_${index}`}>
            <div className="w1200">
              <h3>{ title }</h3>
              <img src="image/index/solutionSub.png" alt="云智慧" className="dot-line" />
              {
                intra ? (
                <div className="items-tit">
                  { 
                    intra.indexOf('\\n') > -1 ? (
                      intra.replace(/\\n/g, ' \n ')
                    ) : intra 
                  }
                </div>
                ) : null
              }
              {
                intraPic ? (
                  <div className="intra-pic"><img src={intraPic} alt="云智慧" /> </div>
                ) : null
              }
              { this.renderItems(module, index) }
            </div>
          </div>
        )
      })
    )
  }

  renderItems(module) {
    const { name } = module
    switch(name) {
      case 'itemsA':
        return <ItemsA {...module} />
        break;
      case 'itemsB':
        return <ItemsB {...module} />
        break;
      case 'itemsC':
        return <ItemsC {...module} />
        break;
      case 'itemsD':
        return <ItemsD {...module}/>
        break;
      case 'itemsE':
        return <ItemsE {...module}/>
        break;
      case 'itemsF':
        return <ItemsF {...module}/>
        break;
      case 'itemsG':
        return <ItemsG {...module}/>
        break;
      case 'itemsH':
        return <ItemsH {...module}/>
        break;
      case 'itemsI':
        return <ItemsI {...module}/>
        break;
      case 'itemsJ':
        return <ItemsJ {...module}/>
        break;
      case 'itemsK':
        return <ItemsK {...module}/>
        break;
      case 'itemsL':
        return <ItemsL {...module}/>
        break;
      case 'itemsM':
        return <ItemsM {...module}/>
        break;
      case 'tabModule':
        return <TabModule {...module} />
        break;
      case 'itemsPic':
        return <ItemsPic {...module}/>
        break;
      case 'itemsText':
        return <ItemsText {...module}/>
        break;
      case 'consulting':
        return <Consulting {...module}/>
        break;
          
      default:
        return null;
    }
  }
}

export default RenderPage