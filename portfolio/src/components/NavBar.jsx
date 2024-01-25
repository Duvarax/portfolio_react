import React from 'react'
import NavButton from './NavButton'
//import './navbar.css'
function NavBar() {
  return (
    <nav className='sm:container mx-auto rounded-lg border border-violet-800 bg-violet-950 flex gap-5 justify-end p-1'>
      <NavButton text='boton1'/>
      <NavButton text='boton2'/>
      <NavButton text='boton3'/>
    </nav>
  )
}

export default NavBar