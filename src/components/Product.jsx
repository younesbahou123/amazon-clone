

import React, { useState } from 'react';
import './App.css';

const Product = ({ name, ingredients = ["Ketchup", "Mayonnaise", "Honey Mustard Dipping Sauce", "Sweet and Sour Sauce", "Ghost Pepper Ranch Sauce", "Barbecue Sauce", "Buttermilk Ranch Sauce", "Sea Salt"], rating, price, image }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customTime, setCustomTime] = useState('1 hour');
  const [showTimeInput, setShowTimeInput] = useState(false);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
    if (!showNotes) {
      setIsEditing(true);
    }
  };

  const handleIngredientSelect = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleNoteChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = () => {
    setIsEditing(false);
    // You could also save to a database or state management here
  };

  const editNotes = () => {
    setIsEditing(true);
  };
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const [cusstomTime, setCusstomTime] = useState('1 hour'); // New state for custom time
  const [showwTimeInput, setShowwTimeInput] = useState(false); // New state for input visibility
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="ready-time-container">
        <div className="ready-time-display" onClick={() => setShowTimeInput(!showTimeInput)}>
          <span className="ready-time-icon">⏱️</span>
          <span>Ready within: {customTime}</span>
          <span className="edit-time-icon">✏️</span>
        </div>
        
        {showTimeInput && (
          <div className="time-input-container">
            <input
              type="text"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
              placeholder="Enter your preferred time"
              className="time-input"
            />
            <button 
              onClick={() => setShowTimeInput(false)}
              className="save-time-btn"
            >
              Save
            </button>
          </div>
        )}
      </div>
     
      <div className="button-group">
        <button onClick={toggleIngredients}>Ingredient-list</button>
        <button onClick={toggleNotes}>Add Meal-Notes</button>
      </div>
      
      {showIngredients && (
        <div className="ingredients-popup">
          <div className="ingredients-list-container">
            {ingredients.map((ingredient, index) => (
              <label key={index} className="ingredient-item">
                <input
                  type="checkbox"
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={() => handleIngredientSelect(ingredient)}
                  className="ingredient-checkbox"
                />
                <span className="ingredient-name">{ingredient}</span>
              </label>
            ))}
          </div>
          <button 
            className="save-button"
            onClick={toggleIngredients}
          >
            Save
          </button>
        </div>
      )}
      
      {/* Keep the rest of your existing popups and elements */}
      {showNotes && (
        <div className="notes-popup">
          {/* ... existing notes popup code ... */}
        </div>
      )}
      
      <p>Selected items: {selectedIngredients.join(', ')}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <div className="quantity-selector">
        <button onClick={decreaseQuantity} className="quantity-btn">-</button>
        <span className="quantity-value">{quantity}</span>
        <button onClick={increaseQuantity} className="quantity-btn">+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;