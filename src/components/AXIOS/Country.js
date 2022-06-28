import React from 'react'

function Country({country}) {
    console.log('country component', country)
  return (
    <div>
        {country.name.common}
        <img src={country.flags.png} alt={country.name.common} />
    </div>
  )
}

export default Country