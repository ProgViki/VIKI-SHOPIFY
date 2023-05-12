import React, {useState} from 'react';
import Data from './Components/Back/Data/Data';
import './App.css';
import Header from './Components/Front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routess from './Components/Front/Routess/Routess';

function App() {
  // let x = [1,2,3,5];
  // x.forEach((e)=> {
  //   if (e>2 && e< 5) return;
  //   console.log(e); 
  // })


  const {productItems} = Data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
       setCartItems(cartItems.map((item)=> item.id ===product.id?{...ProductExist, quantity: ProductExist.quantity +1}: item));
       
    } else{
       setCartItems([...cartItems, {...product, quantity: 1}])
    }
}
const handleRemoveProduct = (product) =>{
  const ProductExist = cartItems.find((item) => item.id ===product.id);
  if(ProductExist.quantity===1){
    setCartItems(cartItems.filter((item) => item.id !==product.id));
  }else {
    setCartItems(
      cartItems.map((item)=> item.id ===product.id?{...ProductExist, quantity:ProductExist.quantity-1}
      : item
      )
    );
  }
}
 const handleCartClearance = ()=>{
  setCartItems([]);
 }
  return (
    <div>
    <Router>
    <Header cartItems={cartItems}/>
    <Routess productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
    handleCartClearance={handleCartClearance}/>
    </Router>
    </div>
  );
}

export default App;
