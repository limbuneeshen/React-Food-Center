import React from 'react';
import './restcard.css';
import { Link } from 'react-router-dom';

const RestCard = ({id,image,name}) =>(
    <div classsName='restcard'>
        <Link className='option' to='/foodmenu'>
                      <div key={id} className='restwrap'>
                       <img
                       className='restimage' src={image} alt={name}
                       />
                      </div>
                     <h4 className='restname'>{name}</h4></Link>
                      </div>
);

export default RestCard;