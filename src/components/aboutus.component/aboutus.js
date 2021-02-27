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
    backgroundPosition: 'center'
  }}
  className='jum-about'
>
        <Container fluid   >
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
  </div>
);
export default Aboutus;