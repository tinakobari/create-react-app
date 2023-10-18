import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };

  return (
    <div>
      <h2 >My forms</h2>
      <form className="add-product-form">
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;