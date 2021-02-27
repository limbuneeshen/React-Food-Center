import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => (
  
        <div className='header'>
        <Link className='logo-container' to='/'>
           <h3>FOODCENTER</h3>
        </Link>
        <div className='options'>
            <Link className='option' to='/signin'>SignIn</Link>
            <Link className='option' to='/register'>Register</Link>
         </div>
    </div>

);
    

export default Header;