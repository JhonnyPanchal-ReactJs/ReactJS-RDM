import { useState } from 'react'
import TextInput from '../Components/common/TextInput/TextInput'
const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState({
    username: '',
    password: '',
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }
  const handleOnSubmit = (e) => {
  e.preventDefault();

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
        onChange={handleOnChange}
        iconClass="bi bi-x-lg" />

      <TextInput
        id="password"
        type="password"
        name="password"
        value={input.password}
        label="Password"
        placeholder="Password"
        iconClass="bi bi-eye"
        required={"PAssword is required"}
        onChange={handleOnChange} />
       <button type="submit">Login</button>
    </form>
    {error && <div>Error </div>}

    </div >
  )
}

export default Login