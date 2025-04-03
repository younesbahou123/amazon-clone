import React, { useState } from 'react';
import './App.css';

const Product = ({ name, ingredients =["onions","pepsi","coca","pickles","halapinos","tomoto","potato","parclt"], rating, price, image }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const handleIngredientSelect = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      
      <button onClick={toggleIngredients}>Ingredients</button>
      
      {showIngredients && (
        <div className="ingredients-popup">
          <h3>Select Ingredients</h3>
          <div className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className={`ingredient-item ${selectedIngredients.includes(ingredient) ? 'selected ' : ''}`}
                onClick={() => handleIngredientSelect(ingredient)}
              >
                {ingredient}
              </div>
            ))}
          </div>
          <button 
            className="done-button"
            onClick={toggleIngredients}
          >
            Done
          </button>
        </div>
      )}
      
      <p>Selected items: {selectedIngredients.join(', ')}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;