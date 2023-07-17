import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ProductForm() {
  const [image, setImage] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [cardBody, setCardBody] = useState('');
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCardTitleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleCardBodyChange = (e) => {
    setCardBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      image,
      cardTitle,
      cardBody,
    };
    dispatch({ type: 'ADD_PRODUCT', payload: product });
    // Clear the form fields
    setImage('');
    setCardTitle('');
    setCardBody('');
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={image} onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="cardTitle">Card Title:</label>
          <input
            type="text"
            id="cardTitle"
            value={cardTitle}
            onChange={handleCardTitleChange}
          />
        </div>
        <div>
          <label htmlFor="cardBody">Card Body:</label>
          <textarea id="cardBody" value={cardBody} onChange={handleCardBodyChange}></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProductForm;
