import React from 'react'
// import './TextInput.css'
import s from '../../../screen/LoginForm/LoginForm.module.scss';
import { Formik, Form, ErrorMessage, useField } from 'formik';

const Input = ({ name, label, htmlFor, error, ...props }) => {
    const [field, meta] = useField(name);
    return (
      <>
        <label className={s.label} htmlFor={htmlFor}>
          {label}
        </label>
        <input
          className={`${meta.error ? s.errInput : s.input}`}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={name}
          render={msg => (
            <div className={s[error]}>
              <p className={s.errText}>{msg}</p>
            </div>
          )}
        />
      </>
    );
  };



const TextInput = ({ id, name, value, type, label, required,placeholder, iconClass, erroremail,errorpassword }) => {
    return (
            <div className='form-group'>
                <Input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    required ={required}
                    placeholder={placeholder}
                    className="input-field"
                    erroremail={erroremail}
                    errorpassword={errorpassword}
                />
                <label htmlFor={id} className="tw-bg-gray-400 dark:tw-bg-zinc-800">
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