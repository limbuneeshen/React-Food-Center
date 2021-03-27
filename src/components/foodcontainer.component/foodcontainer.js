import React from 'react';
import products from './data';
import RestCard from '../restcard.component/restcard.component';
import './foodcontainer.css';
import Row from 'react-bootstrap/Row';


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
                <Row>
               {
                   sections.map(({id,...otherProps})=>(
                       <RestCard key={id} {...otherProps} />
                       ))
               }
               </Row>
            </div>
            </div>
     
        )
    }
}

export default Foodcontainer;