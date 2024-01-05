import React from 'react';
import styled from 'styled-components'; 
import {NavLink} from "react-router-dom";

const Myprofile = () => {
  return (
    <Maindiv>
      <p className='title'>My Profile</p>
      <div className='box'>
        <Nav to="D"><p>Personal Information</p></Nav>
        <Nav to="./Manageaddresses"><p>Manage Addresses</p></Nav>
        <Nav to="E"><p>Payment Card Information</p></Nav>
        <Nav to="F"><p>All Notifications</p></Nav>
      </div>
    </Maindiv>
  );
}

const Nav = styled(NavLink)`
  text-decoration: none;
  margin: 0px;
  color: black;
  padding: 0px;
  width: 328px;
  border-radius: 4px;
  height: 52px;
  &.active{
  cursor: pointer;
  background-color: #E1EBFF;
  color: #3f73ea;
  }
  
`;

const Maindiv = styled.div`
  margin-top: 8px;
  width: 360px;
  height: 266px;
  border-radius: 10px;
  border: 1px solid #E5E5E5;
  padding: 16px;
  font-family:sans-serif;
  background-color: white;

  .title {
    margin: 0px 0px 0px 0px;
    width: 66px;
    height: 18px;
    font-weight: 500;
    font-size: 14px;
  }

  .box {
    margin: 20px 0px 0px 0px;
    width: 328px;
    height: 208px;
    display: flex;
    flex-direction: column;
    p {
      justify-content: center;
      padding-top:16px ;
      padding-left: 29px;
      margin: 4px 0px 0px 0px;
      font-size: 20px;
      width: 328px;
      border-radius: 4px;
      height: 52px;
      &:hover{
        cursor: pointer;
        color: #3f73ea;
      }
    }

  }
`;

export default Myprofile;
