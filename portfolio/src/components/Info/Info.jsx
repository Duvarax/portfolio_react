import React, {useContext, useEffect} from 'react'
import Conocimientos from './conocimientos/Conocimientos'
import Aptitudes from './aptitudes/Aptitudes'
import Formacion from './formacion/Formacion'
import Proyectos from './proyectos/Proyectos.jsx'
import {InfoContext} from '../../context/InfoContext'
import './info.css'


function Info({checkSection}) {

  const {info} = useContext(InfoContext)
  useEffect(() => {
    console.log("cambio de seccion")
  }, [info])

  if(info == "Conocimientos"){
    return (
      <div className='info-div bg-slate-50 rounded-md flex flex-col justify-center items-center p-5'>
        <Conocimientos></Conocimientos>
      </div>
    )
  }
  if(info == "Aptitudes"){
    return (
      <div className='info-div bg-slate-50 rounded-md flex flex-col justify-center items-center p-5'>
        <Aptitudes></Aptitudes>  
      </div>
    )
  }
  if(info == "Formacion"){
    return (
      <div className='info-div bg-slate-50 rounded-md flex flex-col justify-center items-center p-5'>
        <Formacion></Formacion>
      </div>
    )
  }
  if(info == "Proyectos"){
    return (
      <div className='info-div bg-slate-50 rounded-md flex flex-col justify-center items-center p-5'>
        <Proyectos></Proyectos>
      </div>
    )
  }

  return (
    <div className='info-div bg-slate-50 rounded-md flex flex-col justify-center items-center p-5'>
      
    </div>
  )
  //<Conocimientos/>
  
}

export default Info