import React from 'react';
import Product from '../../pages/foodmenupage/Product';
import './main.css';
import Col from 'react-bootstrap/Col';

export default function Main(props){
    const {products,onAdd} = props;
    return (
    <Col md="8">
    <main className="">
        <h2>Products</h2>
        <div className="row"></div>
        {products.map((product)=>(
            <Product key = {products.id} product ={product} onAdd={onAdd}></Product>
        )
        )}
    </main>
    </Col>)
}