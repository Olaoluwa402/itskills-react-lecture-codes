import React, { Component } from 'react'
import HOC from './HOC'

 class HoverCounter extends Component {
    
  render() {
    const {count, counterHandler} = this.props
    return (
      <div>
        <button onMouseOut={counterHandler}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HOC(HoverCounter)