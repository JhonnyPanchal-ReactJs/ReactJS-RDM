import React from 'react'
import { NavLink} from 'react-router-dom'
import { logoutUser } from '../../../Redux/Auth/Actions';
import { useDispatch } from 'react-redux';


const Navigation = () => {
    const dispatch = useDispatch();

    const handleLogout =() =>{
       localStorage.clear();
       dispatch(logoutUser());
    }

  return (
    <>
        <nav className='navigation'>
            <ul>
                <li>
                    <NavLink className="nav-link" to="/Home">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Alert-Management">Alert Management</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Cooling-Tower-Management">Cooling Tower Management</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Customer-Management">Customer Management</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Property-Management">Property Management</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Report-Management">Report Management</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Logout" onClick={handleLogout}>Logout</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation