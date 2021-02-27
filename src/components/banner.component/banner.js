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
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>

</Jumbotron>
     
  </div>

);
 export default Banner;