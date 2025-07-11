//import { createContext } from 'react'
import { useState } from 'react';
import './App.css'
//import ChildFirst from './component/ChildFirst';
//let nameContext=createContext();


//let arr=[1,2,3,4,5,6];

function App() {
  
//   let obj={
//   name:"krishna",
//   age:20,
//   arr:[1,2,3,4,5,6]
// }
 

  //to create a contexto Object
  //step 1: create a contexto Object by using a method createcontext()
  //step 2: give provider to the contexto Object
  //step 3: give

  return (
    <>
    {/* <nameContext.Provider value={obj}>
      <ChildFirst/> 
    </nameContext.Provider>

    <colorContext.Provider value={"red"}>
      <ChildFirst/> 
    </colorContext.Provider>
       */}

       <h1>Count : {count}</h1>
       <br/>

       <button onClick={()=>setCount(count+1)}></button>
    </>
  )
}
//export{nameContext}
export default App