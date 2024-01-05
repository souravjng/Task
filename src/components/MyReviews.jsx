import React from 'react';
import styled from 'styled-components'; 
import image from '../asserts/mobile.png';

const MyReviews = () => {
  return (
    <Maindiv>
    <p className='name'>My Reviews</p>
    <img src={image} alt='img' width={"790px"} height={"277px"}/>
    <button className='button'>Browse now</button>

    </Maindiv>
  )
}

const Maindiv = styled.div`
  position: absolute;
  top: 132px;
  left: 450px;
  width: 830px;
  height: 667px;
  background-color: white;
  border-radius: 10px;
  padding: 16px 20px 16px 20px;
  margin-right: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #E5E5E5;
.name{
    width: 790px;
    height: 42px;
    font-family: sans-serif;
    font-size: 25px;
    margin-top: 10px;
    font-weight: 700;
}
.button {
  margin-left: 330px;
  width: 161px;
  cursor: pointer;
  height: 48px;
  border-radius: 29px;
  border: 2px solid;
  padding: 16px 39px;
  background-color: #E1EBFF;
  color: #1159E5; 
}
`;

export default MyReviews;