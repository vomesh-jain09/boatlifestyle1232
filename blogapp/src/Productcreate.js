// CreateProduct.js
import React, { useState } from 'react';
import axios from 'axios';

import './Createproduc.css'; // Importing CSS

const CreateProduct = () => {
  const [product, setProduct] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // smart watches
   
    axios.post('http://localhost:9000/create',product)
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
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
            placeholder="Enter product title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>
        <button type="submit" className="submit-button" style={{color:"black" }}>watch  Product</button>
      </form>
    </div>
    </>

  );
};

export default CreateProduct;
