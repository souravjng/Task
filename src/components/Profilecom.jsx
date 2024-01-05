import React from 'react';
import styled from 'styled-components';
import picture from '../asserts/picture.png';

const Profilecom = () => {
  return (
    <Maindiv>
        <div className='image'><img src={picture} width={"56px"} height={"56px"}/></div>
        <div className='text'>
        <p className='Hello'>Hello</p>
        <p className='name'>Jagannath S</p>
        </div>
    </Maindiv>
  )
}

const Maindiv = styled.div`
width: 360px;
height: 88px;
padding-left: 16px;
padding-right: 16px;
border-radius: 10px;
border: 1px solid #E5E5E5;
display: flex;
flex-direction: row;
position: relative;
background: linear-gradient(to right, #BBCEFF 0%, #FBE3BF 100%);


.image{
position: absolute;
border-radius: 333px;
top: 16px;
left: 16px;
overflow: hidden;
}
.text{
    position: absolute;
    top: 18px;
    left: 84px;
    width: 153px;
    height: 52px;
    margin-left: 2px;
    font-family:sans-serif;
}
.Hello{
    margin-top:0px ;
    font-size:15px;}
.name{
    margin-top:-10px ;
    font-weight:700;
    font-size: 25px;
}
`;

export default Profilecom;