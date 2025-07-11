// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import About from './Component/About'
import Contact from './Component/Contact'
import FetchID from './Component/FetchID'
import Home from './Component/Home'
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import Register from './Component/Register'
import Navbar from './Component/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <strong>Welcome to React Router World</strong>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/byId:id' element={<FetchID/>}></Route>
      
    </Routes>
      <h1>Welcome to react router</h1>
    </>
  )
}

export default App
