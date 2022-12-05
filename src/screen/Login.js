import { useState,useEffect, useLayoutEffect } from 'react'
import TextInput from '../Components/common/TextInput/TextInput'
import Button from '../Components/common/Button/Button'

import Card from '../Components/common/Card/Card'


const Login = () => {
  const initialState = {
    username: "",
    password: "",
};
  const [input, setInput] = useState(initialState);
  const [ erroremail, setErrorEmail ] = useState("");
  const [ errorpassword, setErrorPassword ] = useState("");


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
    setErrorEmail("")
    setErrorPassword("")

  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.username === '') {
      setErrorEmail("Email Address is required.");
    }
    if (input.password === '') {
      setErrorPassword("Password is required.");
    }
  }


  return (
    <div className='form-container'>
      <form className='form-layout' onSubmit={handleOnSubmit}>
      <TextInput
        id="username"
        type="text"
        name="username"
        value={input.username}
        label="Username"
        placeholder="Username"
        iconClass="bi bi-x-lg"
        erroremail={erroremail}
        onChange={handleOnChange} />


      <TextInput
        id="password"
        type="password"
        name="password"
        value={input.password}
        label="Password"
        placeholder="Password"
        iconClass="bi bi-eye"
        errorpassword={errorpassword}
        onChange={handleOnChange} />
          <Button
          bgColor={'royalblue'}
          color={'white'}
          text={'Submit'}
        />
       {/* <button type="submit">Login</button> */}
    </form>
    {/* <Card title="IGNOREEEEE"description="We are learning please ignoreuashdkasdhksah"/> */}

    </div >
  )
}

export default Login

