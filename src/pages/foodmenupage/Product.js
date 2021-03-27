import React from 'react';
import './foodmenupage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Product(props) {
    const {product,onAdd} = props;
    return (
        <div>
            <Row>
            <Col md="8">
            <span className='product_name'>{product.name}</span>
            </Col>
            <Col md="1">
            <span className='product_price'> ${product.price}</span>
            </Col>
            <Col md="1">
                <button className='add_btn' onClick={()=>onAdd(product)}> <p>+</p> </button>
           </Col>
            </Row>
        </div>
    )
}
