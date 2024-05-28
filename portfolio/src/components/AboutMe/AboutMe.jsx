import React from 'react'
import CircularImage from './CircularImage/CircularImage'
import './aboutme.css'
import perfilImg from  '../../assets/perfil.jpg'
import Contact from './Contact/Contact'
import Idiomas from './Idiomas/Idiomas'


function AboutMe() {  
  return (
    <div className='about-div bg-slate-50 rounded-md ml-11 flex flex-col items-center justify-around p-5 gap-9  '>
      <CircularImage img={perfilImg} name='Duvara Claudio'/>
      <p className='mt-10 '>Estudiante abanderado en la Universidad De La Punta (ULP), finalizando la tecnicatura en desarrollo de software. Apasionado por la programación y con muchas ganas de avanzar en el mundo laboral para desarrollarme profesionalmente. </p>
      <Contact/>
      <Idiomas/>
    </div>
  )
}

export default AboutMe