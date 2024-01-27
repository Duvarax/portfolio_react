import React from 'react'
import NavButton from './NavButton'

function NavBar() {
  return (
    <nav className='sm:container mx-auto rounded-lg border border-violet-800 bg-violet-950 flex gap-5 justify-between p-1'>
      <h2 className='font-mono self-start ml-5 text-slate-200 px-2 rounded bg-slate-800 transition-all hover:bg-slate-50 hover:text-slate-900 duration-1000'>Duvara Claudio</h2>
      <div className='flex gap-5'>
        <NavButton text='Estudios' index='estudios'/>
        <NavButton text='Proyectos' index='proyectos'/>
        <NavButton text='Contacto' index='contacto'/>
      </div>
    </nav>
  )
}

export default NavBar