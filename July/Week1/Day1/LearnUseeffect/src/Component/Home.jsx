import React, { useEffect } from 'react'

function Home() {

    let[data,setData]=useData([])
    useEffect(()=>{
       async function fetchData(){
            
            let resp=await
            let data=await resp.json();
            console.log(data)
            SVGMetadataElement(data)
       }

    })
  return (
    <div>
      <h1>This is my Home page</h1>
    </div>
  )
}

export default Home
