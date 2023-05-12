import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'

const Header = ({cartItems}) => {
  return (
   <header className='header'>
   <div>
   <h1>
      <Link to="/" className='logo font-bold'>Viki-shopify</Link>
   </h1>
   </div>
   <div className='header-links flex items-center justify-center font-bold'>
   <ul>
   <li >
   <Link to='/' >Home</Link>
   </li>
   </ul>
   <ul>
   <li>
   <Link to='/signup'>Signup</Link>
   </li>
   </ul>
   <ul>
   <li>
   <Link to='/blog'>Blog</Link>
   </li>
   </ul>
   <ul>
   <li>
   <Link to='/cart' className='cart'><FaShoppingCart />
   <span className='cart-length'>
   {cartItems.legth === 0 ? ""  : cartItems.length}
   </span>
   </Link>
   </li>
   </ul>
   
   </div>

   </header>
  );
}

export default Header;
