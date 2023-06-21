import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import LIstadoPacientes from "./components/LIstadoPacientes"




function App() {
  
  const [pacientes,setPacientes ] = useState([]);
  const [paciente, setPaciente] = useState({});
 

  return (
   <div className="container mx-auto mt-20"> 
    <Header
      
    />
    
    <div className="mt-12 flex md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
        />
        <LIstadoPacientes
          pacientes={pacientes}
          setPaciente = {setPaciente}
        />
    </div>  
   </div>
  )
}

export default App
