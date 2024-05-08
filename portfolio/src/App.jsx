
import AboutMe from './components/AboutMe/AboutMe'
import Info from './components/Info/Info'
import Sections from './components/Sections/Sections'

import './App.css'

function App() {
  return <div className='flex gap-2 justify-center items-center p-5'>
    <AboutMe />
    <Info />
    <Sections />
  </div>
}

export default App
