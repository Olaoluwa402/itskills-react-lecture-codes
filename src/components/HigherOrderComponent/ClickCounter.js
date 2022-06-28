import React, { Component } from 'react'
import HOC from './HOC'

 class ClickCounter extends Component {
   
  render() {
    const {count, counterHandler, nam} = this.props
    console.log('name',nam)
    return (
      <div>
        <button onClick={counterHandler}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HOC(ClickCounter, 'color')