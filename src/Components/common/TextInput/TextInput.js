import React from 'react'
// import './TextInput.css'
const TextInput = ({ id, name, value, type, label, onChange,required,placeholder, iconClass, erroremail,errorpassword }) => {
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
                    erroremail={erroremail}
                    errorpassword={errorpassword}
                />
                <label htmlFor={id}>
                    {label}
                </label>
                <i className={iconClass}></i>
                {erroremail && <div variant="danger">{erroremail}
                </div>}
                {errorpassword && <div variant="danger">{errorpassword}
                </div>}
            </div>
    )
}

export default TextInput