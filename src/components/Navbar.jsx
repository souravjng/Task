import React from 'react';
import styled from 'styled-components';
import { IoIosSearch } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from '../asserts/profile.png';
import logo from '../asserts/Logo.png';

const Navbar = () => {
    const catagoryNames = ['Mobile & Tablets','Electrical & Electronics','Grocery','TV & Appliances','Fashion','Home & Kitchen','Furniture','Grocery','Grocery','Grocery','Top Saving Offers'];
  return (
    <Maindiv>
    <Topdiv>
    <div className='Logo'><div className='logoimg'><img src={logo} width={"45px"} height={"40px"}/></div><div className='logoname'><p>Mo Market</p></div></div>
    <div className='Inputfield'><input type='text' placeholder='Search for products,Brands,Markets & more'/><IoIosSearch className='searchicon'/></div>
    <div className='Profile'><img src={profile} width={"20px"} height={"20px"}/><p>Jagannath <RiArrowDropDownLine className='dropdownarrow' /></p></div>
    <div className='Cart'><CgShoppingBag className='Shoppingbag' /><p>Cart</p></div>
    </Topdiv>
    <Bottomdiv>
    {catagoryNames.map((curr, index) => (
        <p className='section' key={index}>{curr}</p>
      ))}



    </Bottomdiv>

    </Maindiv>
  )
}

const Maindiv = styled.div`
  background-color: white;
  width: 100%;
  height: 122px;
  display: flex;
  flex-direction: column;
`;
const Topdiv = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
.Logo{
    padding-left: 40px;
    width: 127px;
    height: 50px;   
    justify-content: center;
    margin: auto;
    display: flex;
    flex-direction: row;
.logoimg{
    flex:4;
    margin-top:6px ;
}
.logoname{
    flex:6;
    margin: 0px 0px 0px 0px;
p{margin: 4px 0px 0px 0px;
  font-size:21px;
  font-weight: bolder;
  font-family:sans-serif;}
}
}
.Inputfield{
    margin: auto;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    width: 1000px;
    overflow: hidden;
    height: 48px;
    position: relative;
input{
    width: 94%;
    height: 48px;
    font-size: 15px;
    border: none;
    outline: none;
    padding-left: 15px;}
.searchicon{
    position: absolute;
    top: 12px;
    right: 20px;
    font-size: 25px;
    color: gray;
    z-index: 1;
}
}
.Profile{
    cursor: pointer;
    padding-right: 30px;
    margin: auto;
    justify-content: center;
    width: 125px;
    height: 22px;
    display: flex;
    flex-direction: row;
    font-family:sans-serif;
    position: relative;
img{
  overflow: hidden;
  margin-right: 5px;
  border-radius: 333px;}
p{
    color: #4A4A4A;
    font-size: 13px;
    margin-top: 2px;
}
.dropdownarrow{
    font-size: 35px;
    color: rgb(0, 119, 255);
    position: absolute;
    right: 10px;
    top: -8px;
}
}
.Cart{
    cursor: pointer;
    padding-right: 40px;
    margin: auto;
    justify-content: center;
    width: 60px;
    height: 30px;
    font-family:sans-serif;
    position: relative;
    padding-top:10px ;
.Shoppingbag{
    font-size: 25px;
    margin-top: -2px;
}
p{position:absolute;
 top:-1px;
 font-size: 14px;
right:40px;
}
}
`;
const Bottomdiv = styled.div`
  border: 1px solid #a8a8a8;
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
.section{
    margin: auto;
    font-size: 16px;
    font-family:sans-serif;
    cursor: pointer;
    
}
`;



export default Navbar;