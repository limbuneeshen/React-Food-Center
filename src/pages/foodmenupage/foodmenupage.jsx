import React from 'react';
import './foodmenupage.css';
import Footer from '../../components/footer.component/footer'
import FoodBanner from '../../components/foodbanner.component/foodbanner'
import Basket from '../../components/basket.component/basket';
import Main from '../../components/main.component/main';
import FoodMenu from '../../components/foodmenu.component/foodmenu';
import menudata from './menudata';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Menuitem() {
  const {products} = menudata;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x)=>x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id));
    } else{
      setCartItems(cartItems.map((x)=>
       x.id === product.id ? {...exist, qty: exist.qty-1} : x
       )
       );
    }
  };
  
  return (
    // <div className="menuitem">
    //   {/* <Header countCartItems = {cartItems.length}></Header> */}
    <div className="foodpage">
      <div> 
    <FoodBanner/>
    </div> 
    <Container>
      <Row>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </Row>
      </Container>
      <div>
     
        <Footer/>
      </div>
    </div>
  );
}

 
export default Menuitem;