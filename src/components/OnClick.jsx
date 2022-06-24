import React, { Component } from 'react'

export default class OnClick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
     /* 3. event binding inside the constructor function */
     this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler(id){
    console.log(id)
  }
  render() {
    const myList = [{id:1, fruit:'Orange'},{id:2,fruit:'Mango'},{id:3,fruit:'Bannana'}]
    return (
      <div>
        {myList.map((item) => (<div>
          {item.id} {item.fruit} 
          <button onClick={this.clickHandler.bind(this, item.id)}>Click</button>
          </div>))}
        {/* 1. event binding inside the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* 2. binding unsing arrow function */}
         {/* <button onClick={(e)=> this.clickHandler(e)}>Click</button> */}

           {/* 3. binding inside the constructor fuction */}
         {/* <button onClick={this.clickHandler}>Click</button> */}

      </div>
    )
  }
}

// Event Handler - Functional Component
// function OnClick() {
    // const clickHandler = (e) =>{
    //       console.log(e.target)
    // }

//     const submitHandler = (e) =>{
//       console.log(e.target)
// }

// const greetHandler = (e) =>{
//   console.log(e.target)
// }
//   return (
//     <div>
      //  <button onClick={()=> clickHandler()}>Click</button>
//        <button onClick={greetHandler}>Click</button>
//        <form onClick={submitHandler}>Click</form>
//     </div>
//   )
// }

// export default OnClick
