import { useState } from 'react'
import Formulario from './Formulario'
import ListaTareas from './ListaTareas'

const Contenedor = () => {

  const [listado, setListado] = useState([])

  const handleAddItem = addItem => {
    setListado([...listado, addItem])
  }

  return (
    <div>
      <Formulario
        handleAddItem={handleAddItem}
      />
      <ListaTareas
        listado={listado}
        setListado={setListado}
      />
    </div>
  )
}

export default Contenedor