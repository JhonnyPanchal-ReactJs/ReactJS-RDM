import React from 'react';
import $ from 'jquery';

const CustomerManagement = () => {
  $('nav').removeClass("tw-hidden");
  return (
    <h1 style={{color:'black'}} >Customer Management</h1>
  )
}

export default CustomerManagement