import React from 'react'
import './TextInput.css'
const TextInput = ({ id, name, value, type, label, onChange,required,placeholder,erroremail,errorpassword }) => {
    return (
        <div className="input-group">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
                erroremail={erroremail}
                errorpassword={errorpassword}

            />
          {erroremail && <div variant="danger">{erroremail}</div>}
          {errorpassword && <div variant="danger">{errorpassword}</div>}

            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default TextInput