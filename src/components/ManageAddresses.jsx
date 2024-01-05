import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import img1 from '../asserts/img1.png';
import img2 from '../asserts/img2.png';
import img3 from '../asserts/img3.png';
import img4 from '../asserts/img4.png';

const ManageAddresses = () => {
  const data = [
    {
      mainimg: img1,
      name: 'ITC Aashrivaad Atta',
      desc: '5kg',
      comment: 'Amazing Product',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      otherimgs: img3,
      date: 'Today',
    },
    {
      mainimg: img2,
      name: 'Sharma Fashion Wear',
      desc: 'Clothes Store & Designer at Rajeev Market, New Delhi, India',
      comment: 'Good Seller & Awesome Products',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      otherimgs: img4,
      date: 'Yesterday',
    },
    {
      mainimg: img1,
      name: 'ITC Aashrivaad Atta',
      desc: '5kg',
      comment: 'Amazing Product',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitt...',
      otherimgs: img3,
      date: '12 Dec 2023',
    },
  ];

  return (
    <Maindiv>
      <p className='name'>ManageAddresses</p>
      {data.map((curr, index) => {
        return <Card key={index} {...curr} />;
      })}
    </Maindiv>
  );
};

const Maindiv = styled.div`
  position: absolute;
  top: 132px;
  left: 450px;
  width: 830px;
  height: 963px;
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
`;

export default ManageAddresses;