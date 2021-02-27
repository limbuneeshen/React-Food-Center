import React from 'react';
import products from './data';
import RestCard from '../restcard.component/restcard.component';
import './foodcontainer.css';

class Foodcontainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            sections : products
        };
    }
    render() {
        const{sections} = this.state;
        return( 
            <div className='restcontainer'>
            <h2 className='availrestaurant'>Available Restaurants</h2>
            <div className='rest'>
               {
                   sections.map(({id,...otherProps})=>(
                       <RestCard key={id} {...otherProps} />
                       ))
               }
            </div>
            </div>
        )
    }
}

export default Foodcontainer;