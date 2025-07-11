import React from 'react'

function Home() {
    let navigate=useNavigate()

    function handleClick(){
        navigate('/about'
    }
  return (
    <div>
      <h1>this ia my Home page</h1>
      <button onClick={handleClick}><FaGreaterThan /></button>
    </div>
  )
}

export default Home
ImageTrack