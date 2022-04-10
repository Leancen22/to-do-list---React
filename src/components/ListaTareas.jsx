import React from 'react'
import Checkbox from './Checkbox'

const ListaTareas = ({listado, setListado}) => {

    const onClickRemove = e => {
        const actualizarLista = listado.filter(elems => !elems.done)
        setListado(actualizarLista)
    }

    const onChangeStatus = e => {
        const { name, checked } = e.target
        const actualizarLista = listado.map(elems => ({
            ...elems, 
            done: elems.id === name ? checked : elems.done
        }))
        setListado(actualizarLista)
    }

    const checks = listado.map(elems => (
        <Checkbox
            key={elems.id} data={elems} onChange={onChangeStatus}
        />
    ))

    return (
        <div>
            {listado.length ? checks : 'No hay tareas'}
            {listado.length ? (
                <p>
                    <button onClick={onClickRemove}>
                        Borrar tareas realizadas
                    </button>
                </p>
            ) : null}
        </div>
    )
}

export default ListaTareas