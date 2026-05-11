import React from 'react'

function Props(props) {
  return (
    <div>
        <h1>Hello{props.name}</h1>
        <h2>{props.name} mob no is {props.mob}</h2>
    </div>
  )
}

export default Props