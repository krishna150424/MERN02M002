import React, { useContext } from 'react'
import { nameContext } from '../App'

function ChildSec() {

    let obj=useContext(nameContext)
  return (
    <div>
        name is :{name} <br/>
        obj value are <br/>
        name is:{obj.name} <br/>
        age is :{obj.age} <br/>
        array elements are :{obj.arr[1]}
    </div>
  )
}

export default ChildSec
