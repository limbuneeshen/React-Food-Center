import React from 'react';
import  './banner.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import bannerimg from '../../assets/bann.jpg';

const Banner = () => (
  <div>
      <Jumbotron  style={{  
  backgroundImage:  `url(${bannerimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
  
}} >
  <h1>Special!</h1>
  <p>
   30% off in ordering food more than 1000 rs and get free delivery. Special chicken momo.
  </p>

</Jumbotron>
     
  </div>

);
 export default Banner;