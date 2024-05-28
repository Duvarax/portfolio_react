import React, {useContext} from 'react'
import Segment from './Segment/Segment'
import './sections.css'
function Sections() {

  return (
    <div className='sections-div bg-slate-50 rounded-md flex flex-col items-center p-5 justify-around'>
        <Segment text="Conocimientos"/>
        <Segment text="Aptitudes"/>
        <Segment text="Formacion"/>
        <Segment text="Proyectos"/>
        <Segment text="Experiencia"/>
    </div>
  )
}

export default Sections