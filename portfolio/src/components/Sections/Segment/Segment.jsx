import React, {useContext} from 'react'
import {InfoContext} from '../../../context/InfoContext'
import './segment.css'

function Segment({text}) {

  const {handleCambioSegment} = useContext(InfoContext)
  const handleClick = () => {
    handleCambioSegment(text)
  }
  return (
    <div onClick={handleClick} className='segment w-32 min-h-28 flex flex-col justify-center items-center bg-slate-50 rounded-lg p-2 hover:bg-blue-950 hover:text-yellow-300 hover:cursor-pointer'>
        <i class="fa-solid fa-chevron-right icon"></i>
        <span className='overflow-hidden'>{text}</span>        
    </div>
  )
}

export default Segment