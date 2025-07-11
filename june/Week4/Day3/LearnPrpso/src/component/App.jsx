import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  let a=10;
  let str="xyz"
  let obj={
    name:"xy",
    age:20
  }

  return ( 
    <>
     <h1>hello to react world</h1>
     <Home a={a} str={str} obj={obj}/>
    </>
  )
}

export default App