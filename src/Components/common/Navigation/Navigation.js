import React from 'react'
import { NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
    <>
        <nav>
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
                    <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation