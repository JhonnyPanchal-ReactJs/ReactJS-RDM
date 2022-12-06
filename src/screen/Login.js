	
	import { useState,useMemo } from 'react'
  import TextInput from '../Components/common/TextInput/TextInput'
  import Button from '../Components/common/Button/Button'
  import {
    URL_HOME_PAGE,API_URL
  } from '../Helpers/Paths'
  import './css/LoginStyle.css'
  import { useNavigate } from 'react-router-dom';
  import CODES from '../Helpers/StatusCodes';
  import Api from '../Helpers/ApiHandler';
  import { loginUser } from '../Redux/Auth/Actions';
  import { useDispatch } from 'react-redux';  
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const Login = () => {
    const navigate = useNavigate();
    const API = useMemo(() => new Api(), []);
  
    const initialState = {
      username: "",
      password: "",
  };
    const [input, setInput] = useState(initialState);
    const [ erroremail, setErrorEmail ] = useState("");
    const [ errorpassword, setErrorPassword ] = useState("");
    const dispatch = useDispatch();
  
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value })
      setErrorEmail("")
      setErrorPassword("")
  
    }
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      // if (input.username === '') {
      //   setErrorEmail("Email Address is required.");
      // }
      // if (input.password === '') {
      //   setErrorPassword("Password is required.");
      // }
      try {
        let reqBody = {
          app: "IndygoBeta",
          email: "jhonny.panchal@kemsys.com",
          password: "Admin@12345",
          environment:"TEST",
          rememberme:"false"
        };
        let response = await API.post(API_URL.LOG_IN, {
          data: reqBody,
      });
  
        if (response?.status === CODES.SUCCESS) {
            dispatch(loginUser(response?.data?.data));
            toast.success("Login Success")

                navigate(URL_HOME_PAGE)
            return;
        }
    } catch (error) {
        if (
            error?.response?.status === CODES.UNAUTHORIZED ||
            error?.response?.status === CODES.PRECONDITION_FAILED ||
            error.response?.status === CODES.BAD_REQUEST
        ) {
          
          toast.error("Wrong Credentials")
          //  dispatch(showToast(error?.response?.data?.message, 'error'));
           // dispatch(showToast('Successfully added your interests', 'success'));
  
        }
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
            color={'lightblue'}
            text={'Submit'}
          />
         {/* <button type="submit">Login</button> */}
      </form>
      {/* <Card title="IGNOREEEEE"description="We are learning please ignoreuashdkasdhksah"/> */}
      <ToastContainer
       
      />
      </div >
    )
  }
  
  export default Login