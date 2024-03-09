// import { useState, useEffect } from 'react';
// import axios from 'axios';
import SideMenu from '../components/sidemenu';

function Admin() {
  const menuItems = [
    { label: 'Dashboard', to: '/dash' },
    { label: 'Add Staff', to: '/addstaff' },
    // { label: 'Register Patients', to: '/register'}, 
    // {label: 'Appointments', to: '/apt' },
  ];


  return (
    <>
    <SideMenu items={menuItems}/>
    </>
  );
}

export default Admin