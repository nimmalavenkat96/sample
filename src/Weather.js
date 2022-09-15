import React, { useState } from 'react'

 const Weather = () => {
     const [name,setname]=useState("")
     const [result,setresult]=useState("")

     const changehandler=e=>{
         setname(e.target.value)
     }
     const submithandler=e=>{
         e.preventDefault();
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response=>response.json()).then(data=>setresult((data.main.temp)-273.50))



        }
  return (
    <div><form onSubmit={submithandler}> 
        <input type="text" onChange={changehandler}/><br/>
        <button  type="submit">get temperature</button>
        </form>
        <h1>temperature of {name}is{result} degreees</h1>
        </div>
  )
}
export default Weather