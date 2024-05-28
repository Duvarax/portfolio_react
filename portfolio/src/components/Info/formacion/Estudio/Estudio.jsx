import React from 'react'

function Estudio({lugar, inicio, fin, titulo, estado}) {
  return (
    <div className='flex flex-col gap-5'>
        <p className='font-bold'>{lugar}</p>
        <div>
            <span className='text-gray-600 font-thin'>{inicio} - {fin}</span><br />
            <span className='font-medium'>{titulo}</span>
        </div>
        <p>Estado: <b>{estado}</b></p>
    </div>
  )
}

export default Estudio