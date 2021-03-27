import React from 'react';
import  './foodbanner.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import foodbannerimg from '../../assets/foodbann.jpg';

const FoodBanner = () => (
  <div className="foodbann">
      <Jumbotron className='' style={{  
  backgroundImage:  `url(https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  paddingTop:'500px',
  height:'100px !important',
  width:'100%',
  filter:'contrast()'


  

  
}} >
  
</Jumbotron>
     
  </div>

);
 export default FoodBanner;