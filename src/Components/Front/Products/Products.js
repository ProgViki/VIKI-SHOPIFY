import React from 'react';
import './Products.css';
const Products = ({productItems, handleAddProduct}) => {
  

  return (
    <div className='products shadow-xl rounded-full'>
      {productItems.map((productItem)=>(
        <div className='card shadow-2xl'>
        <div>
        <img  className="product-image" src={productItem.image} alt={productItem.name} />
        </div>
        <div>
        <h3 className="product-name italic">{productItem.name}</h3>
        </div>
        <div className='product-price font-bold pt-3 text-3xl'>#{productItem.price}</div>
        <div>
        <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add To Cart</button>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
