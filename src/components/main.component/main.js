import React from 'react';
import Product from '../../pages/foodmenupage/Product';
import './main.css';
export default function Main(props){
    const {products,onAdd} = props;
    return <main className="block col-2">
        <h2>Products</h2>
        <div className="row"></div>
        {products.map((product)=>(
            <Product key = {products.id} product ={product} onAdd={onAdd}></Product>
        )
        )}
    </main>
}