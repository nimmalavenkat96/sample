import React ,{useState}from 'react'
import Todolist from './Todolist'
 const Todo = () => {
     const [task,settask]=useState("")
     const [todo,settodo]=useState("")

   const   changehandler=e=>{
         settask(e.target.value)
     }
      const submithandle =e=>{
          e.preventDefault();
          const newtodos=[...todo,task];
          settodo(newtodos);
          settask("");
      }
  return (
    <div>
        <form onSubmit={submithandle}> 
       <input type="text"  onChange={changehandler}/>
      
       <input type="submit" value="add" /> 
       
       </form>
       <Todolist todolist={todo}/>
    </div>
  )
}
export default Todo