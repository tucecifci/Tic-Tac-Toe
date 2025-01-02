import React from 'react'

function Square({value}) {
const handleClick = ()=>{
    console.log("click");
}
    
  return (
   <button className='square'
   onClick={handleClick}
   >{value} </button>
  )
}

export default Square