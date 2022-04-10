import { useState } from 'react'

const Formulario = ({handleAddItem}) => {

    const [tarea, setTarea] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            tarea
        })
        setTarea("")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <input 
                        type="text"
                        className=''
                        value={tarea} 
                        onChange={e => setTarea(e.target.value)}
                    />
                    <button
                        className=''
                        disabled={tarea ? '' : 'disabled'}
                    >Agregar Tarea</button>
                </div>
            </div>
        </form>
    )
}

export default Formulario