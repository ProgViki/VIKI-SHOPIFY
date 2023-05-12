import React from 'react';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import {Routes, Route} from 'react-router-dom';
import Products from '../Products/Products';
import Blog from '../Blog/Blog';

const Routess = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
      
      </Route>
      
      <Route path="/signup" element={<Signup  />} /
      
      
      
      
      
      
      
      >
      <Route path="/blog" element={<Blog />}>
      
      </Route>
      <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}/>}>
      
      </Route>
      
      </Routes>
    </div>
  );
}

export default Routess;

