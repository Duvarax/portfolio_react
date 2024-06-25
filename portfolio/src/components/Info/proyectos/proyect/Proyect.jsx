import React from 'react'

function Proyect({imagen, title}) {
  return (
    <figure className='w-56 h-56 '>
        <img src={imagen} alt="" className='w-full h-full object-cover rounded' />
        <figcaption className='text-center mt-5'>{title}</figcaption>
    </figure>
  )
}

export default Proyect