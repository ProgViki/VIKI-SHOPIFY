import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import './Cart.css';

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price,0); 
    const config = {
      reference: (new Date()).getTime().toString(),
      email: "inehijezue@gmail.com",
      amount: totalPrice*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_ae11b23caf7686673cfd07eaedd06ee3541b0be6',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div style={{width:"15%", margin:"0 auto"}}>
            <button style={{padding:"20px 30px",backgroundColor: "green", color: "white", fontSize:"20px"}} onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Checkout</button>
        </div>
      );
  };
  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Cart Items</h2>
     <div className='clear-cart'>
     {cartItems.length >=1 &&(
        <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
     )}
     </div>
      {cartItems.length === 0 && (<div className="cart-items-empty"> No items In Here</div>) }
      <div>
      {cartItems.map((item) =>(
        <div key={item.id} className="cart-items-list">
        <img className='cart-items-image' src={item.image} alt={item.name} />
        <div className='cart-items-name'>{item.name}</div>
        <div className='cart-items-function'>
        <button className='cart-items-add'onClick={() =>handleAddProduct(item)}>+</button>
        <button className='cart-items-remove'onClick={() =>handleRemoveProduct(item)}>-</button>
        </div>
        <div className='cart-items-price'>{item.quantity}*#{item.price}</div>
        </div>
        
      ))}
      </div>
      <div className='cart-items-total-price-name'>Total price
      <div className='cart-items-total-price'>#{totalPrice}

      </div>
      </div>
      <PaystackHookExample />
    </div>
  );
}

export default Cart;
