import React from 'react';
import $ from 'jquery';

const PropertyManagement = () => {
  $('nav').removeClass("tw-hidden");
  return (
    <h1 style={{color:'black'}}>Property Management</h1>
  )
}

export default PropertyManagement