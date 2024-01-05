import React from 'react';
import styled from 'styled-components'; 
import { FaStar } from "react-icons/fa6";

const Card = ({ mainimg, name, desc, comment, about, otherimgs, date }) => {
  return (<>
    <Maindiv>
    <Boxdiv1>
    <div className='productimg'><img  src={mainimg} width={'94px'} height={"94px"}/>
    
        <p className='name'>{name}</p>
        <p className='desc'>{desc}</p>
        <div className='stars'><FaStar className='star'/><FaStar  className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar style={{color:'#B3B3B3'}} /></div>
        </div>
    </Boxdiv1>
    <Boxdiv2 >
        <p className='comment'>{comment}</p>
        <p className='about'>{about}</p>
        <div className='imagebox'>
        <img src={otherimgs} width={"75px"} height={"74px"}/>
        <img src={otherimgs} width={"75px"} height={"74px"}/>
        <img src={otherimgs} width={"75px"} height={"74px"}/>
        <img src={otherimgs} width={"75px"} height={"74px"}/></div>
    </Boxdiv2>
    <div className='Review'><h6>Reviewed</h6><p className='date'>{date}</p></div>
    
    <div className='border'></div>
    </Maindiv>

  </>)
}

const Maindiv = styled.div`
  background-color: white;
  width: 790px;
  height: 290px;
  display: flex;
  padding: 16px 16px 0px 16px;
  flex-direction: column;
  position: relative;
  .Review{
    position: absolute;
    top: 2.83px;
    font-family: sans-serif;
    left: 702.5px;
    width: 84px;
    height: 34px;
  }
  h6{position:absolute;
    right: 0;
  margin: 0px 0px 0px 0px;
    font-size: 12px;
    color: #7D7D7D;
  }
  .date{
    position:absolute;
    font-size: 14px;
    right: 0;
    top:0;
  }
.border{
    width: 100%;
    height: 0px;
    border: 1px solid #7D7D7D;
}
`;

const Boxdiv1 = styled.div`
  background-color: white;
  width: 428px;
  height: 94px;
  display: flex;
  flex-direction: row;
  position: relative;
  .productimg{
     border-radius:7px;
     overflow:hidden;
  }
  .name{
    position: absolute;
    top: -10px;
    left: 110px;
    width: 90%;
    height: 24px;
    font-size: 16px;
  }
  .desc{
    height: 16px;
    font-size: 12px;
    width: 90%;
    font-family: sans-serif;
    color: #7D7D7D;
    position: absolute;
    top: 12px;
    left: 110px;
  }
  .stars{
    position: absolute;
    width: 90%;
    height: 20px;
    top:61px;
    left:114.5px;
    font-size: 21px;
    
  }
  .star{
  color:#FFC01D;}
`;
const Boxdiv2 = styled.div`
  background-color: white;
  width: 671px;
  height: 146px;
  display: flex;
  font-family: sans-serif;
  flex-direction: column;
.comment{
    position: absolute;
    width:90% ;
    font-weight: 600;
    height:16px ;
    top:102px;
    left: 115.5px;
    size: 14px;
}
.about{
    position: absolute;
    width:671px ;
    height:36px ;
    top:129px;
    left: 115.5px;
    size: 14px;
    color: #7D7D7D;

}
.imagebox{
position: absolute;
justify-content: space-around;
display: flex;
flex-direction: row;
width:330px;
height:74px;
top:174px;
left:115.5px;
border-radius: 5px;
}
`;

export default Card;