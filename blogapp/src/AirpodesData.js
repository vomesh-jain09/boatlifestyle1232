
import React, { useState } from 'react';
import axios from 'axios';

 // Importing CSS

const CreateProduct = () => {
  const [Airpodes, setAir] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAir({ ...Airpodes, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //  Airpodes
    axios.post('http://localhost:9000/creation',Airpodes)
    .then((response) => {
      alert("Airpodes created")
    }).catch((error)=>{ 
      alert("Airpodes failer")
    })
    
  };

  return (
    <>   
     <div className="create-product-container">
      <h2>Airpodes Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={Airpodes.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={Airpodes.title}
            onChange={handleChange}
            required
            placeholder="Enter product title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={Airpodes.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={Airpodes.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>
        <button type="submit" className="submit-button" style={{color:"black" }}> add Airpodes </button>
      </form>
    </div>
    </>

  );
};

export default CreateProduct;
