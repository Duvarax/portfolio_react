import React from 'react'

function CircularImage({img, name}) {
  return (
    <figure className='w-32 h-32 rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt="" />
        <figcaption className='absolute ml-1 font-semibold'>{name}</figcaption>
    </figure>
  )
}

export default CircularImage