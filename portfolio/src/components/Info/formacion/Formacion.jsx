import React from 'react'
import Estudio from './Estudio/Estudio'
function Formacion() {
    return (
        <div className='flex flex-col gap-10'>
            <Estudio
                lugar="Universidad de la punta"
                inicio="2021"
                fin="2024"
                titulo="Tecnicatura en desarrollo de software"
                estado="En progreso" 
            />
            <Estudio
                lugar="Universidad de la punta"
                inicio="2021"
                fin="2024"
                titulo="Tecnicatura en desarrollo de software"
                estado="En progreso"
            />
            <Estudio
                lugar="Universidad de la punta"
                inicio="2021"
                fin="2024"
                titulo="Tecnicatura en desarrollo de software"
                estado="En progreso"
            />
        </div>

    )
}

export default Formacion