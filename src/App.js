import './screen/Login'
// import Routes from './Routes/Route';
import { Route, Routes } from 'react-router-dom'
import Home from './screen/Home/Home';
import AlertManagement from './screen/Management/Alert/AlertManagement';
import CoolingTowerManagement from './screen/Management/CoolingTower/CoolingTowerManagement';
import CustomerManagement from './screen/Management/Customer/CustomerManagement';
import PropertyManagement from './screen/Management/Property/PropertyManagement';
import Reports from './screen/Reports/Reports';
import Navigation from './Components/common/Navigation/Navigation';
import Logout from './screen/Logout';
import Login from './screen/Login';
import NoMatch from './screen/NoMatch/NoMatch';
import $ from 'jquery';

function App() {

  $("html").addClass("dark")

  return (
      <>
        <div className='tw-bg-white tw-text-black dark:tw-bg-zinc-900 dark:tw-text-white'>

          <Navigation/>

          <div className="App">
              <Routes>
                  <Route path='/Home' element={<Home/>} />
                  <Route path='/' element={<Login/>} />
                  <Route path='/Alert-Management' element={<AlertManagement/>} />
                  <Route path='/Cooling-Tower-Management' element={<CoolingTowerManagement/>} />
                  <Route path='/Customer-Management' element={<CustomerManagement/>} />
                  <Route path='/Property-Management' element={<PropertyManagement/>} />
                  <Route path='/Report-Management' element={<Reports/>} />
                  <Route path='/Logout' element={<Logout/>} />
                  <Route path='/*' element={<NoMatch/>} />
              </Routes>
          </div>

        </div>

        {/* <Routes /> */}
      </>
  );
}
export default App;
