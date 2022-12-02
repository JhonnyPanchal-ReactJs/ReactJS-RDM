import React from 'react'
import './TextInput.css'
const TextInput = ({ id, name, value, type, label, onChange,required,placeholder }) => {
    return (
        <div className="input-group">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
                required ={required}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default TextInput