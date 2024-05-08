import React from 'react'
import CircularImage from './CircularImage/CircularImage'
import './aboutme.css'

function AboutMe() {
  return (
    <div className='about-div bg-slate-300 rounded-md ml-11 flex flex-col items-center pt-5'>
      <CircularImage img={"https://www.elcomercio.com/wp-content/uploads/2023/01/perrito.jpg"} name='Duvara Claudio'/>
    
    </div>
  )
}

export default AboutMe