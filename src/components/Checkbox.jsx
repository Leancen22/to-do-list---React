import React from 'react'

const Checkbox = (props) => {

    const {onChange, data: {id, tarea, done}} = props
    
    return (
        <div>
            <label>
                <input
                    type="checkbox" 
                    name={id}
                    defaultChecked={done}
                    onChange={onChange}
                />
                <div>{tarea}</div>
            </label>
        </div>
    )
}

export default Checkbox