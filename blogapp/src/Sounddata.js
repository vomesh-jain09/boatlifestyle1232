// NECK BANDS
import React, { useState } from 'react';
import axios from 'axios';

 // Importing CSS

const CreateProduct = () => {
  const [producted, setProduct] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...producted, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // neckbands
   
    axios.post('http://localhost:9000/creates',producted)
    .then((response) => {
      alert("product created")
    }).catch((error)=>{ 
      alert("product failer")
    })
    // Add functionality to submit the product details to an API or state management
  };

  return (
    <>   
     <div className="create-product-container">
      <h2>Neckband Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={producted.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={producted.title}
            onChange={handleChange}
            required
            placeholder="Enter product title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={producted.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={producted.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>
        <button type="submit" className="submit-button" style={{color:"black" }}> add Neckband </button>
      </form>
    </div>
    </>

  );
};

export default CreateProduct;
