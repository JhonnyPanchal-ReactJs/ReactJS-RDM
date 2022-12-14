import './screen/Login'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Home from './screen/Home/Home';
import AlertManagement from './screen/Management/Alert/AlertManagement';
import CoolingTowerManagement from './screen/Management/CoolingTower/CoolingTowerManagement';
import CustomerManagement from './screen/Management/Customer/CustomerManagement';
import PropertyManagement from './screen/Management/Property/PropertyManagement';
import Reports from './screen/Reports/Reports';
import Navigation from './Components/common/Navigation/Navigation';
import Logout from './screen/Logout';
import Login from './screen/Login';
import { useSelector } from 'react-redux';
import { URL_HOME_PAGE, URL_LOGIN } from '../src/Helpers/Paths';
import { Routes as RoutesSwitch, Route } from 'react-router-dom';
import $ from 'jquery';
import NoMatch from './screen/NoMatch/NoMatch';
import { BrowserRouter } from 'react-router-dom';
import Website from './Components/Website';


const BEFORE_LOGIN_ACCESSIBLE_PATHS = [
  URL_LOGIN,
  URL_HOME_PAGE
];

function App() {
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  // const userInfo = useSelector((state) => state.Auth.userInfo);

  // $("html").addClass("dark")

  // useEffect(() => {
  //   if (isLoggedIn && BEFORE_LOGIN_ACCESSIBLE_PATHS?.includes(window?.location?.pathname)) {
  //     if (userInfo) {
  //       navigate(URL_HOME_PAGE);
  //     } else {
  //       navigate(URL_LOGIN);
  //     }
  //   }
  //   if (!isLoggedIn) {
  //     navigate(URL_LOGIN)
  //   }
  // }, [isLoggedIn, navigate, userInfo]);
  // const Loggedin = localStorage.getItem('isLoggedIn')
  return (
    <BrowserRouter  basename={process.env.REACT_APP_BASE_PATH}>
      <Website />
   </BrowserRouter>
    // <>
    //   <div className="tw-bg-white tw-text-black dark:tw-bg-zinc-900 dark:tw-text-white tw-min-h-screen">
    //     {Loggedin ===null ?
    //       <Login/>
    //   :
    //     <Navigation/>
    //     }
    //     <div className="App tw-p-0 tw-px-8">
    //         <RoutesSwitch>
    //             <Route exact  path="/Home" element={<Home/>} />
    //             <Route exact  path="Alert-Management" element={<AlertManagement/>} />
    //             <Route path='/Cooling-Tower-Management' element={<CoolingTowerManagement/>} />
    //             <Route path='/Customer-Management' element={<CustomerManagement/>} />
    //             <Route path='/Property-Management' element={<PropertyManagement/>} />
    //             <Route path='/Report-Management' element={<Reports/>} />
    //             <Route path='/Logout' element={<Logout/>} />
    //             {/* <Route path='/*' element={<NoMatch/>} /> */}
    //             {Loggedin !== null ? <Route path='/*' element={<NoMatch/>} /> :null}
    //         </RoutesSwitch>
    //     </div>
    //   </div>
    // </>
  );
}
export default App;
