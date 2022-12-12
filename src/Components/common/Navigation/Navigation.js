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
        {/* <nav className='navigation'>
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
        </nav> */}

        <nav className="tw-bg-white dark:tw-bg-stone-800">
            <div className="tw-tw-max-w-7xl tw-mx-auto tw-px-2 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-relative tw-flex tw-items-center tw-justify-between tw-h-16">
                    <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="tw-sr-only">Open main menu</span>
                            {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
                            <svg className="tw-block tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}

                            <svg className="tw-hidden tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center sm:tw-items-stretch sm:tw-justify-start">
                        {/* <div className="tw-flex-shrink-0 tw-flex tw-items-center">
                            <img className="tw-block lg:tw-hidden tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            <img className="tw-hidden lg:tw-block tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                        </div> */}
                        <div className="tw-hidden sm:tw-block sm:tw-ml-6">
                            <div className="tw-flex tw-space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <NavLink to="/Home" className="tw-bg-gray-700 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium" aria-current="page">Home</NavLink>

                                <NavLink to="/Alert-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Alert</NavLink>

                                <NavLink to="/Cooling-Tower-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Cooling Tower</NavLink>

                                <NavLink to="/Customer-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Customer</NavLink>

                                <NavLink to="/Property-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Property</NavLink>

                                <NavLink to="/Report-Management" href="#" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Report</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 sm:tw-static sm:tw-inset-auto sm:tw-ml-6 sm:tw-pr-0">

                        {/* Profile dropdown  */}
                        <div className="tw-ml-3 tw-relative">
                            <div>
                                <button type="button" className="tw-bg-gray-800 tw-flex tw-text-sm tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="tw-sr-only">Open user menu</span>
                                    <img className="tw-h-8 tw-w-8 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                            {/* Dropdown menu, show/hide based on menu state.
                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95" */}
                            <div className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-48 tw-rounded-md tw-shadow-lg tw-py-1 tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                {/* Active: "bg-gray-100", Not Active: "" */}
                                <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                <NavLink to="/Logout" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={handleLogout}>Sign out</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:tw-hidden" id="mobile-menu">
                <div className="tw-px-2 tw-pt-2 tw-pb-3 tw-space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <NavLink to="/Home" className="tw-bg-gray-900 tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium" aria-current="page">Home</NavLink>

                    <NavLink to="/Alert-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Alert Management</NavLink>

                    <NavLink to="/Cooling-Tower-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Cooling Tower Management</NavLink>

                    <NavLink to="/Customer-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Customer Management</NavLink>

                    <NavLink to="/Property-Management" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Property Management</NavLink>

                    <NavLink to="/Report-Management" href="#" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Report Management</NavLink>

                </div>
            </div>
        </nav>

    </>
  )
}

export default Navigation