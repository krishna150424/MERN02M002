import React from 'react'

function home(props) {
  return (
    <div>
      value is :{props.a} <br />
        the string value is :{props.str}

        <br />
        The string value is :{props.str}
        <br />
        age :{props.obj.age}
        <br />
        name :{props.obj.name}
        <br />
        email :{props.obj.email}
      <h2>this is my home page</h2>
    </div>
  )
}

export default home
 