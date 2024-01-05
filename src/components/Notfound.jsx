import React from 'react';
import styled from 'styled-components'; 

const Notfound = () => {
  return (
    <Maindiv>
    <h1>Not Found</h1>

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
h1{
    font-family: sans-serif;
    font-size: 60px;
    color: gray;
    margin: auto;
}
`;

export default Notfound;