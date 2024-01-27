import React from 'react'

function NavButton({text,index}) {
  const href = '#'+index
  return (
    <button className='bg-slate-50 rounded px-1.5 font-bold transition-all duration-700 hover:bg-slate-800 hover:text-slate-50'><a className='no-underline' href={href}>{text}</a></button>
  )
}

export default NavButton