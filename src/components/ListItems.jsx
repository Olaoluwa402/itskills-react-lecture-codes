import React from 'react'
import Item from './item'

function ListItems() {
    // const myList = [{id:1, fruit:'Orange'},{id:2,fruit:'Mango'},{id:3,fruit:'Bannana'}]
   
    // const result = myList.map((item)=> (<h2>{item.fruit}</h2>))

    const students = [
        {id:'1', name:'John',age:19,friends:['Peter','Tumise','Mfon']}, 
        {id:'2', name:'Peter',age:18,friends:['Peter','Tumise','Mfon']},
        {id:'3', name:'James',age:16,friends:['Peter','Tumise','Mfon']}
]
  
    // return result
      return (
    <div>
        {
            students.map((student)=> (
                <Item key={student.id} student={student}/>
            )
            )
        }
    </div>
  )
}

export default ListItems