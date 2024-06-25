import React from 'react'
import Estudio from './Estudio/Estudio'
import './formacion.css'
function Formacion() {
    return (
        <div >
            <ul className='flex flex-col gap-y-16'>
                <li className='lista-item'>
                    <Estudio
                    lugar="Universidad de la punta"
                    inicio="2021"
                    fin="2024"
                    titulo="Tecnicatura en desarrollo de software"
                    estado="En progreso" 
                    />
                </li>
                <li className='lista-item'>
                    <Estudio
                    lugar="Freecodecamp.org"
                    inicio="2021"
                    fin="2021"
                    titulo="Certificacion Responsive Web Design"
                    estado="Finalizado" 
                    />
                </li>
                <li className='lista-item'>
                    <Estudio
                    lugar="Colegio Tecnico Fray Luis Beltran N°4"
                    inicio="2013"
                    fin="2020"
                    titulo="Tecnico electricista"
                    estado="Finalizado" 
                    />
                </li>
            </ul>
        </div>

    )
}

export default Formacion