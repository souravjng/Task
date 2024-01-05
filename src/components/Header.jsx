import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Profilecom from './Profilecom';
import Myprofile from './Myprofile';
import MyOrders from './MyOrders';


const Header = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="left">
            <div className="top">
              <Profilecom />
            </div>
            <div className="mid">
              <Myprofile />
            </div>
            <div className="bottom">
              <MyOrders />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
