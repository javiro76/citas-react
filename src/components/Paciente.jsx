

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">Javier</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">Javier@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">10 Diciembre 2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">es simplemente el texto de relleno de 
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno 
        estándar de las industrias desde el año 1500, cuando un impresor
        N. del T.  </span>
      </p>
    </div>


  )
}

export default Paciente