import React from 'react'

function Navbar() {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}

      <Navlink to="/" style={({isActive})=>({color:isActive?"red":""})}>Home</Navlink>
      <Navlink to="/about" style={({isActive})=>({color:isActive?"red":""})}>About</Navlink>
      <Navlink to="/service" style={({isActive})=>({color:isActive?"red":""})}>Service</Navlink>
      <Navlink to="/contact" style={({isActive})=>({color:isActive?"red":""})}>Contact</Navlink>
    </div> 
  )
}

export default Navbar