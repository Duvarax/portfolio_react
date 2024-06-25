
import React, {useState, useEffect} from 'react'
import imagen from '../../../assets/perrito.jpg'
import Proyect from './proyect/Proyect'
import ProjectsData from './proyectos.js'

function Proyectos() {

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simular una llamada a una API
    setProjects(ProjectsData);
  }, []);
console.log(projects)
  const proyectitos = <Proyect imagen={projects[0].image} title={projects[0].title}/> 

  console.log(proyectitos)
  return (
    <div className="h-max grid grid-cols-1 md:grid-cols-2 gap-20 p-5 border-solid border-red-500 border-2 rounded h-64 overflow-y-auto">
       <>{proyectitos}</>
        <Proyect 
        imagen={imagen}
        title={"xdddd"}
        />
        
    </div>
  )
}

export default Proyectos