import React from 'react';
import './basket.css';
import StripeCheckoutButton from '../payment.component/paymentcheckout';
import Table from 'react-bootstrap/Table';
import { Col } from 'react-bootstrap';

export default function Basket(props){
    const {cartItems,onAdd, onRemove,qty} = props;
    const itemsPrice = cartItems.reduce((a,c) => a +c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice  = itemsPrice + taxPrice + shippingPrice;
    return (
    <aside className="block col-4">
         <div>
           {cartItems.length=== 0 && <div>Cart Is Empty</div>}
       </div>
       <h2>Cart Items</h2>
      
       <Table>
           <thead>
            <th>
                Item Name
            </th>
            <th>
                Quantity
            </th>
           
            </thead>
          
            <tbody>
            {cartItems.map((item)=>(
                <tr>
                <td>{item.name}</td> 
                <td>
                    <button  onClick={()=>onRemove(item)} className="add" > &#10094;</button> <span className='qty'>{item.qty}</span>
                   
                   <button onClick={()=>onAdd(item)} className="remove" >&#10095;</button></td>
                </tr>
                  )
       
                  )}
            </tbody>  
        </Table>
     
       
       {cartItems.length !== 0 && (
           <>
           <hr></hr>
           <div className="basketcss">
               
           <div className="row">
               <div className="col-2">Items Price</div>
               <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>          
           </div>
           <div className="row">
               <div className="col-2">Tax Price</div>
               <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>          
           </div>
           <div className="row">
               <div className="col-2">Shipping Price</div>
               <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>          
           </div>
           <div className="row">
               <div className="col-2"><strong>Total Price</strong></div>
               <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>          
           </div>
           <hr/>
           <div className="row">
               <button >
               <StripeCheckoutButton price={totalPrice}/>
               </button>
           </div>
           </div>
           </>
       )
       
       }
       
    </aside>
    );
}