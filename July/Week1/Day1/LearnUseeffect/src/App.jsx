import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [count,setCount]=useState(0)
  // let [total,setTotal]=useState(0)


  // useeffect

  // useEffect(()=>{
  //   //First
  //   //set of code
  

  // return ()=>{
  //   Second
  // }
  // }, [third])//dependency

  //case 1
  //useeffect will execute at every render
  // useEffect(() =>{
  //   alert("use effect trigger")
  // })

  //case2
  //it will execute at first render only

  // useEffect(() =>{
  //   alert("use effect trigger at first render only")
  // },[])

  //case3
  //it will give the return when the component is unmounted
  // useEffect(() =>{
  //   alert("value updated")
  //   return()=>{
  //     alert("value unmounted")

  //   }
  // })

  //case4
  //  useEffect(() =>{
  //   alert("based on dep")
  //  })


  return (
    <>
      <h1>Hellooooooo</h1>
      <strong>Count :{count}</strong><br/>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <br />
      <button onClick={()=>setTotal(ttalo+1)}>Inc total</button>
    </>
  )
}

export default App
