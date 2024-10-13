import React, { useState } from 'react';
import '../components/css/AddItem.css';

const AddItem = ({ onAddItem, addedItems }) => {  // receive addedItems as a prop
  const [formData, setFormData] = useState({ //default values for data
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation to check if ID already exists in addedItems
    const isDuplicateId = addedItems.some(item => item.id === formData.id);
    if (isDuplicateId) {
      setErrorMessage('ID already exists! Please use a different ID.');
      return;  // stop submission if id already exists
    }

    // if no duplicate, call onAddItem to add the new item
    onAddItem(formData);
    setSuccessMessage('Item added successfully!');
    setErrorMessage('');  // Clear error message if any

    // reset form after submitting
    setFormData({
      id: '',
      name: '',
      quantity: '',
      price: '',
      category: ''
    });
  };

  return (
    <div className="main">
    <div className="addItem">
      <h2 className="additem_h2">Add Item</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="additem_input-group">
          <label htmlFor="id" className="additem_input-label">ID:</label>
          <input
            className="additem_input-box" 
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="additem_input-group">
          <label htmlFor="name" className="additem_input-label">Name:</label>
          <input
            className="additem_input-box"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="additem_input-group">
          <label htmlFor="quantity" className="additem_input-label">Quantity:</label>
          <input
            className="additem_input-box"
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="additem_input-group">
          <label htmlFor="price" className="additem_input-label">Price:</label>
          <input
            className="additem_input-box"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="additem_input-group">
          <label htmlFor="category" className="additem_input-label">Category:</label>
          <select
            className="additem_input-box"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option> 
          </select>
        </div>
        <button className="additem_button" type="submit">Add Item</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
    </div>
  );
};

export default AddItem;
