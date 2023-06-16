import Formulario from "./components/Formulario"
import Header from "./components/Header"
import LIstadoPacientes from "./components/LIstadoPacientes"




function App() {
  

  return (
   <div className="container mx-auto mt-20"> 
    <Header/>
    
    <div className="mt-12 flex md:flex">
        <Formulario/>
        <LIstadoPacientes/>
    </div>  
   </div>
  )
}

export default App
