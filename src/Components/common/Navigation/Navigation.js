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
        <div className="Navigation tw-bg-blue-500 dark:tw-bg-blue-500">
            <div className="tw-tw-max-w-7xl tw-mx-auto tw-px-2 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-relative tw-flex tw-items-center tw-justify-between tw-h-16">
                    <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="tw-sr-only">Open main menu</span>
                            <svg className="tw-block tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="tw-hidden tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center sm:tw-items-stretch sm:tw-justify-start">
                        <div className="navigation  tw-hidden sm:tw-block">
                            <div className="tw-flex tw-space-x-4">
                                <NavLink to="/Home" className="navLink" aria-current="page">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-5 tw-h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    Home
                                </NavLink>

                                <NavLink to="/Alert-Management" className="navLink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    Alert
                                </NavLink>

                                <NavLink to="/Cooling-Tower-Management" className="navLink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                    </svg>
                                    Cooling Tower
                                </NavLink>

                                <NavLink to="/Customer-Management" className="navLink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    Customer
                                </NavLink>

                                <NavLink to="/Property-Management" className="navLink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                    Property
                                </NavLink>

                                <NavLink to="/Report-Management" href="#" className="navLink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-5 tw-h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>
                                    Report
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 sm:tw-static sm:tw-inset-auto sm:tw-ml-6 sm:tw-pr-0">

                        {/* Profile dropdown  */}
                        <div className="tw-ml-3 tw-relative">
                            <div className='tw-flex '>
                                <button type="button" className="dark:tw-bg-gray-800 tw-flex tw-text-sm tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="tw-sr-only">Open user menu</span>
                                    <img className="tw-h-8 tw-w-8 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                                <NavLink to="/Logout" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-flex tw-gap-2 tw-justify-center tw-align-middle tw-text-gray-300 dark:tw-text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                    Sign out
                                </NavLink>
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
        </div>

    </>
  )
}

export default Navigation