import React from 'react'
import Friends from './Friends'

function item({student}) {
    console.log(student)
  return (
    <React.Fragment>
    <div>
        <h2>{student.id}</h2>
        <h2>{student.name}</h2>
        <h2>{student.age}</h2>
        <div>
            <Friends friends={student.friends}/>
        </div>
    </div>
    <div>hjhj</div>
    </React.Fragment>
    
  )
}

export default item