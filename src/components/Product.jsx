import React from 'react';
import './App.css';




const Product = ({ name, ingredians,rating, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      
      <button>ingredians</button>
     
       
     
     <p>{rating}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;