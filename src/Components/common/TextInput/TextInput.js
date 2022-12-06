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
                {/* <i onclick={(e) => onclick(e)} className={iconClass}></i> */}
                {erroremail && <div style={{color:'red'}}variant="danger">{erroremail}
                </div>}
                {errorpassword && <div style={{color:'red'}} variant="danger">{errorpassword}
                </div>}
            </div>
    )
}

export default TextInput