import React, { useState } from 'react'
import { Test } from './Test';
import axios from 'axios';
export const App = () => {
  const [data, setdata] = useState({
    username: '',
    password: '',
    possword:'',
  })
  const {username,password,possword}=data;
  const handler=e=>{
    setdata({...data,[e.target.name]:[e.target.value]})
  }
  const submitting=e=>{
    e.preventDefault();
    axios.post('https://test-9fbc8-default-rtdb.firebaseio.com/register.json',data).then(()=>alert('submitted successfully'))
    
  }
  return (
    <div>
      <form onSubmit={submitting}> 
        <center>
          <label>NAME</label>
          <input type="text" name="username" onChange={handler} value={data.username} /><br />
          <label>PASSWORD</label>
        <input type="password" name="password"  onChange={handler} value={data.password} /><br/> 
        <label>CONFIRM PASSWORD</label>
        <input type="password" name="possword"  onChange={handler} value={data.possword} /><br/> 
        
          <button type="submit">submit</button>
        </center>
      </form>
      <Test/>
    </div>
  )
}
