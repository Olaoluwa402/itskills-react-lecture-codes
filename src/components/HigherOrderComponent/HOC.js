import React, { Component } from 'react'

const HOC = (OriginalComponent, color)=>{
 console.log(color)
    class NewComponent extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
      
            this.counterHandler = this.counterHandler.bind(this)
          }
      
          counterHandler(){
             this.setState((prev)=> ({
                  count:prev.count + 1
             }))
          }
            render(){

                return <OriginalComponent {...this.props} count={this.state.count} counterHandler={this.counterHandler}/>
            }
    }

    return NewComponent
}

export default HOC

