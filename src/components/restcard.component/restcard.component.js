import React from 'react';
import './restcard.css';

const RestCard = ({id,image,name}) =>(
    <div classsName='restcard'>
                      <div key={id} className='restwrap'>
                       <img
                       className='restimage' src={image} alt={name} 
                       />
                      </div>
                     <h4 className='restname'>{name}</h4>
                      </div>
);

export default RestCard;