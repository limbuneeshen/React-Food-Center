import React from 'react';
import  './foodbanner.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import foodbannerimg from '../../assets/foodbann.jpg';

const FoodBanner = () => (
  <div className="foodbann">
      <Jumbotron  style={{  
  backgroundImage:  `url(${foodbannerimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  
}} >
  
</Jumbotron>
     
  </div>

);
 export default FoodBanner;