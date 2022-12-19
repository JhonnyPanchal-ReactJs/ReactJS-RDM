
import { useState, useMemo } from 'react'
import TextInput from '../Components/common/TextInput/TextInput'
import Button from '../Components/common/Button/Button'
import {
  URL_HOME_PAGE, API_URL
} from '../Helpers/Paths'
// import './css/LoginStyle.css'
import { useNavigate  } from 'react-router-dom';
import CODES from '../Helpers/StatusCodes';
import Api from '../Helpers/ApiHandler';
import { loginUser } from '../Redux/Auth/Actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { environment } from '../environment.development';
import Check from '../Components/common/Check/Check';
import jwt from 'jwt-decode' // import dependency
import jwtDecode from 'jwt-decode';
import { async } from 'q';
var CryptoJS = require("crypto-js");


const Login = () => {
  const navigate = useNavigate();
  const API = useMemo(() => new Api(), []);

  const initialState = {
    email: "",
    password: "",
    showPassword: false,
  };
  const[password,setpassword]=useState("password");
  const [input, setInput] = useState(initialState);
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const [userResponse, setuserResponse] = useState("");
  const [managementResponse, setmanagementResponse] = useState("");



  const dispatch = useDispatch();


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, showPassword: !input.showPassword })
    setErrorEmail("")
    setErrorPassword("")
  }

const handleClickShowPassword = () => {
    input.showPassword = !input.showPassword;
  if(input.showPassword === true){
    setpassword('text')
  }else{
    setpassword('password')
  }
};
const handleInputClear = () =>{
  setInput(initialState)
}
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (input.email === '') {
      setErrorEmail("Email Address is required.");
    } else if (input.password === '') {
      setErrorPassword("Password is required.");
    } else {
      try {
        const app = environment.app
        if (app) {
          input.app = app;
        }
        const env = environment.environment;
        if (env) {
          input.environment = env;
          input.rememberme = false;
        }
        let response = await API.post(API_URL.LOG_IN, {
          data: input,
        });
        if (response?.status === CODES.SUCCESS) {
          toast.success("Login Success")
          setTimeout(async () => {
            setuserResponse(response?.data)
            dispatch(loginUser(response?.data));
             processUserData(response?.data);

            //navigate(URL_HOME_PAGE)
          }, 1000);
          return;
        }
      } catch (error) {
        if (
          error?.response?.status === CODES.UNAUTHORIZED ||
          error?.response?.status === CODES.PRECONDITION_FAILED ||
          error.response?.status === CODES.BAD_REQUEST
        ) {
          toast.error("Wrong Credentials")
        }
      }
    }
  }

  const processUserData = async (userResponse) =>{
    localStorage.removeItem('appToken');
    localStorage.setItem('appToken', userResponse.apps[0].token);
    localStorage.setItem('refresh_token', userResponse.refreshtoken);
    const decodedToken = jwtDecode(userResponse.apps[0].token);
    const obj = {
      hierarchy: decodedToken.hierarchy,
      role: decodedToken.role,
      privileges: decodedToken.privileges,
    };
    userResponse.apps[0].user = obj;
    getApplicationData(userResponse.apps[0]);

    localStorage.setItem('default_hierarchy',JSON.stringify(obj.hierarchy))

  }
  const getApplicationData =async (app) =>{
    let response = await API.get(API_URL.GET_APP_DETAILS + '/' + app.app)
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(response.data), 'kEm$Y$*RdM').toString();
    localStorage.setItem('selectedAppData',ciphertext)
     getManagementCompany ()
  }
  const getManagementCompany= async () =>{
    const custObj = {
      level: 1
    };
    let response = await API.get(API_URL.Get_HIERARCHY ,{
      params:  custObj 
    })
    localStorage.setItem('managment_company', JSON.stringify(response?.data))
    var localStorageAppData = localStorage.getItem('selectedAppData');
    var bytes = CryptoJS.AES.decrypt(localStorageAppData, 'kEm$Y$*RdM');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    var managementcompany = JSON.parse(localStorage.getItem('managment_company'))
    const hierarchyObj = {};
    hierarchyObj[decryptedData.hierarchy.levels[0]] = environment.app;
    hierarchyObj[decryptedData.hierarchy.levels[1]] = managementcompany?.data[0].name;
    localStorage.removeItem('default_hierarchy')
    localStorage.setItem('default_hierarchy', JSON.stringify(hierarchyObj))
    console.log("hierarchy", JSON.stringify(hierarchyObj))
  
  }
  
  return (
    <>
      {/* New Design Start */}
      <div className='auth-layout'>
        <div className='form-layout tw-bg-gray-400 dark:tw-bg-zinc-800'>
          <div className='text'>
            <h4>Log in</h4>
            <p className='tw-text-gray-200'>to continue Indygo beta</p>
          </div>
          <div className='form-fields'>
            <div className='form-inner-wrapper'>
              <form className='main-form-layout' onSubmit={handleOnSubmit}>
                <div className='textbox-with-icon'>
                  <TextInput
                    id="email"
                    type="text"
                    name="email"
                    value={input.email}
                    label="email"
                    placeholder="email"
                    erroremail={erroremail}
                    onChange={handleOnChange} />
                    <i onClick ={handleInputClear}className="bi bi-x-lg"></i>
                </div>

                <div className='textbox-with-icon'>
                  <TextInput
                    id="password"
                    type={password}
                    name="password"
                    value={input.password}
                    label="Password"
                    placeholder="Password"
                    errorpassword={errorpassword}
                    onChange={handleOnChange} />
                  {input.showPassword ? <i onClick={handleClickShowPassword} className="bi bi-eye"></i>
                    :
                    <i onClick={handleClickShowPassword} className="bi bi-eye-slash"></i>
                  }
                </div>
                <Check isChecked={true} label="Remember me" />
                <div className="form-actions">
                  {/* <a href='#' className='text-white'>Forgot password?</a> */}
                  <Button text={'Login'} />
                </div>
              </form>
              <ToastContainer/>
            </div>
          </div>
        </div>
        <div className='auth-footer'>
          <p>© 2022 Indygo. All rights reserved</p>
        </div>
      </div>
      {/* New Design End */}


    </>
  )
}

export default Login
