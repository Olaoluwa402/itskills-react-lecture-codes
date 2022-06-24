import React, { Component } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Slide from './Slide'
import {Data} from './data'

import styles from './advert.module.css'

const length = Data.length
class Advert extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         current:0
      }
    }
  
    nextHandler(){
       this.setState({
        current: this.state.current === length -1 ? 0 : this.state.current + 1
      })
    }
    prevHandler(){
        this.setState({
            current: this.state.current === 0 ? length - 1 : this.state.current - 1
          }) 
    }
    
  render() {
    return (
      <div className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.arrowLeft} onClick={this.prevHandler.bind(this)}/>
        <FaArrowAltCircleRight className={styles.arrowRight} onClick={this.nextHandler.bind(this)}/>
         {Data.map((slide, index) => (
            <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
               {index === this.state.current && (<Slide key={index} slide={slide}/>)}
            </div>
         ))}
      </div>
    )
  } 
}
export default Advert;