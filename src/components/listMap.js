import React from 'react'

function listMap() {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <h2>list Item</h2>
        <ul>
           <Numbers numbers={numbers}/>
        </ul>
    </div>
  )
}

const Numbers = (props)=>{
     return(
        <>
            {
                props.numbers.map((number,i)=> (<li key={i}>{number}</li>))
            }
        </>
     )
}

export default listMap