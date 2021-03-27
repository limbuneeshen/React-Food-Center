import React from 'react';
import './aboutus.css';
import aboutimage from '../../assets/about.jpg';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Aboutus=()=>(
    <div className='aboutus'>
<Jumbotron fluid 
  style={{  
    backgroundImage:  `url(${aboutimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'24rem'
  }}
  className='jum-about'
>
        <Container fluid   >
          <h1 className="display-3">Food Center</h1>
          <p className="lead">We have special offer and affordable price of food where you can buy food from anywhere and get delivered quickly. Stay hungry Stay healthy.</p>
        </Container>
      </Jumbotron>
  </div>
);
export default Aboutus;