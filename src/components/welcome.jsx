import React, { Component } from 'react'

 class Welcome extends Component {
   constructor(props) {
     super(props)
     this.state = {
        message:'Greet Guest',
     }
   }

   handleClick(){
      this.setState({
         message:'You are welcome'
      })
   }
   
  render() {
   const {name} = this.props
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>{name}</p>
        <button onClick={()=> this.handleClick()}>Greet</button>
      </div>
    )
  }
}
export default Welcome