import React from 'react'
import Country from './Country'

function Countries({countries}) {
  return (
    <div>
        {countries.length > 0 && countries.map((country)=> <Country country={country}/>)}
    </div>
  )
}

export default Countries