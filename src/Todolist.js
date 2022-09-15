import React from 'react'
import Todo from './Todo'
 const Todolist = ({todolist}) => {
  return (
      <div>
{
    todolist.map((todos,index)=>
        <h1>{todos}</h1>
    )
}
</div>
  )
}
export default Todolist