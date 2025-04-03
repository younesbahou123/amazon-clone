import React, { useState } from 'react';
import './App.css';

const Product = ({ name, ingredients = ["onions","pepsi","coca","pickles","halapinos","tomoto","potato","parclt"], rating, price, image }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      
      <div className="button-group">
        <button onClick={toggleIngredients}> <select name="" id=""></select> Ingredient-list </button>
        <button onClick={toggleNotes}>Add Meal-Notes </button>
      </div>
      
      {showIngredients && (
        <div className="ingredients-popup">
          <h3> select your meal's Ingredients </h3>
          <div className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className={`ingredient-item ${selectedIngredients.includes(ingredient) ? 'selected' : ''}`}
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
      
      {showNotes && (
        <div className="notes-popup">
          <h3>Your Notes</h3>
          {isEditing ? (
            <>
              <textarea
                value={notes}
                onChange={handleNoteChange}
                placeholder="Type your special instructions here to take into accont  while making your meal..."
                className="notes-textarea"
              />
              <button onClick={saveNotes} className="save-button">
                Save Notes
              </button>
            </>
          ) : (
            <>
              <p className="notes-display">{notes || "No notes added yet"}</p>
              <button onClick={editNotes} className="edit-button">
                Edit Notes
              </button>
            </>
          )}
          <button 
            className="close-button"
            onClick={toggleNotes}
          >
            Close
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