import React, {createContext, useState, useEffect} from 'react'

export const InfoContext = createContext();

export function InfoContextProvider(props) {

  const SECTIONS = {
    Conocimientos: "Conocimientos",
    Aptitudes: "Aptitudes",
    Formacion: "Formacion",
    Proyectos: "Proyectos",
    Experiencia: "Experiencia"
    }

  const [info, setInfo] = useState(SECTIONS["Conocimientos"])
  useEffect(() => {
    console.log("Contexto cargado")
  }, [])
  
  function handleCambioSegment(segment){
    setInfo(segment);
    console.log(segment)
  } 
  return (
    <InfoContext.Provider value={{info, handleCambioSegment}}>
        {props.children}
    </InfoContext.Provider>
  )
}
