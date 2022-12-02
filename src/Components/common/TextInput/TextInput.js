import React from 'react'
// import './TextInput.css'
const TextInput = ({ id, name, value, type, label, onChange,required,placeholder, iconClass }) => {
    return (
            <div className='form-group'>
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e)}
                    required ={required}
                    placeholder={placeholder}
                    className="input-field"
                />
                <label htmlFor={id}>
                    {label}
                </label>
                <i className={iconClass}></i>
            </div>
    )
}

export default TextInput