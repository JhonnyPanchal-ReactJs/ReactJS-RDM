import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../Components/common/Table/Table';
// import DateRange from '../DateRangePicker/DateRange';
import $ from 'jquery';
import Card from '../../Components/common/Card/Card';

const Home = () => {
  $('nav').removeClass("tw-hidden");
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (

    <>

      {/* <div className="App"> */}
        {/* Card Section Start */}
        {/* <div>
          <h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 dark:tw-text-white">Last 30 days</h3>
          <dl className="tw-mt-5 tw-grid tw-grid-cols-1 tw-gap-5 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
            <Card title={"New Red Alerts"} value={30} />
            <Card title={"Red Alerts"} value={41} />
            <Card title={"New Yellow Alerts"} value={19} />
            <Card title={"Yellow Alerts"} value={23} />
          </dl>
        </div> */}
        {/* Card Section End */}

        {/* <DateRange /> */}

        {/* <Table/> */}
        {/* <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column} /> */}
      {/* </div> */}

  {/* <html className="h-full bg-gray-100">
  <body className="h-full"> */}
<div className="tw-min-h-full">
   {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state.  */}
  <div className="tw-fixed tw-inset-0 tw-flex tw-z-40 lg:tw-hidden" role="dialog" aria-modal="true">

    <div className="tw-fixed tw-inset-0 tw-bg-gray-600 tw-bg-opacity-75" aria-hidden="true"></div>

    <div className="tw-relative tw-flex-1 tw-flex ftw-lex-col tw-max-w-xs tw-w-full tw-pt-5 tw-pb-4 tw-bg-cyan-700">

      <div className="tw-absolute tw-top-0 tw-right-0 tw--mr-12 tw-pt-2">
        <button type="button" className="tw-ml-1 tw-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white">
          <span className="sr-only">Close sidebar</span>
           {/* Heroicon name: outline/x */}
          <svg className="tw-h-6 tw-w-6 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="tw-flex-shrink-0 tw-flex tw-items-center tw-px-4">
        <img className="tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo" />
      </div>
      <nav className="tw-mt-5 tw-flex-shrink-0 tw-h-full tw-divide-y tw-divide-cyan-800 tw-overflow-y-auto" aria-label="Sidebar">
        <div className="tw-px-2 tw-space-y-1">
           Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600"
          <a href="#" className="tw-bg-cyan-800 tw-text-white tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md" aria-current="page">
             {/* Heroicon name: outline/home */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/clock */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            History
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/scale */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Balances
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/credit-card */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Cards
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/user-group */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Recipients
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/document-report */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </a>
        </div>
        <div className="tw-mt-6 tw-pt-6">
          <div className="tw-px-2 tw-space-y-1">
            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/cog */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>

            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/question-mark-circle */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help
            </a>

            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-base tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/shield-check */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div className="tw-flex-shrink-0 tw-w-14" aria-hidden="true">
       Dummy element to force sidebar to shrink to fit close icon
    </div>
  </div>

   {/* Static sidebar for desktop */}
  <div className="tw-hidden lg:tw-flex lg:tw-w-64 lg:tw-flex-col lg:tw-fixed lg:tw-inset-y-0">
     {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="tw-flex tw-flex-col tw-flex-grow tw-bg-cyan-700 tw-pt-5 tw-pb-4 tw-overflow-y-auto">
      <div className="tw-flex tw-items-center tw-flex-shrink-0 tw-px-4">
        <img className="tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo" />
      </div>
      <nav className="tw-mt-5 tw-flex-1 tw-flex tw-flex-col tw-divide-y tw-divide-cyan-800 tw-overflow-y-auto" aria-label="Sidebar">
        <div className="tw-px-2 tw-space-y-1">
           {/* Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" */}
          <a href="#" className="tw-bg-cyan-800 tw-text-white tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md" aria-current="page">
             {/* Heroicon name: outline/home */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/clock */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            History
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/scale */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Balances
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/credit-card */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Cards
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/user-group */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Recipients
          </a>

          <a href="#" className="tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600 tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md">
             {/* Heroicon name: outline/document-report */}
            <svg className="tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </a>
        </div>
        <div className="tw-mt-6 tw-pt-6">
          <div className="tw-px-2 tw-space-y-1">
            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/cog */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>

            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/question-mark-circle */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help
            </a>

            <a href="#" className="tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-leading-6 tw-font-medium tw-rounded-md tw-text-cyan-100 hover:tw-text-white hover:tw-bg-cyan-600">
               {/* Heroicon name: outline/shield-check */}
              <svg className="tw-mr-4 tw-h-6 tw-w-6 tw-text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div className="lg:tw-pl-64 tw-flex tw-flex-col tw-flex-1">

    <main className="tw-flex-1 tw-pb-8">
    <div className="App">
        {/* Card Section Start */}
        <div>
          <h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 dark:tw-text-white">Last 30 days</h3>
          <dl className="tw-mt-5 tw-grid tw-grid-cols-1 tw-gap-5 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
            <Card title={"New Red Alerts"} value={30} />
            <Card title={"Red Alerts"} value={41} />
            <Card title={"New Yellow Alerts"} value={19} />
            <Card title={"Yellow Alerts"} value={23} />
          </dl>
        </div>
        {/* Card Section End */}


        <Table/>
      </div>

    </main>
  </div>
</div>
    </>
  )
}

export default Home