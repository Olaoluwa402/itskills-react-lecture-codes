// import React from 'react';
import React from 'react';
import Counter from './Counter';
import Xy from './xy';
import './Greet.css'


function Greet({name}){
  
    return (
        <>
        <h1 className='heading'>Hello {name}</h1>
        {/* <p>{message}</p>
        <p>{surname}</p> */}
        {/* <Counter/>
        <Xy /> */}
       </>
    )
}

export default Greet;