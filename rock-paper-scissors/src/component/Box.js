import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src='https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-scissors/how-to-draw-scissors-step-6.jpg'></img>
      <h2>Win</h2>
    </div>
  )
}

export default Box
