import React, { useState } from 'react';
import '../components/css/UpdateItem.css';

const UpdateItem = ({ addedItems, onUpdateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState(''); // options of  'quantity' or 'price'
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    const item = addedItems.find((item) => item.id === id); //find if item exists

    if (item) {
      const oldValue = item[field]; //old value
      const updatedItem = { ...item, [field]: newValue }; //new value

      onUpdateItem(updatedItem);

      setMessage(`The ${field} of Item ${item.name} is updated from ${oldValue} to ${newValue}`); //change value of item
      setId('');
      setField('');
      setNewValue('');
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="updateItem">
      <h2>Update Item</h2>
      <form className="updateItem_form" onSubmit={handleUpdate}>
        <div className="updateitem_input-group">
          <label className="updateitem_input-label">ID:</label>
          <input
            className="updateitem_input-box"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="updateitem_input-group">
          <label className="updateitem_input-label">Field to update:</label>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            required
          >
            <option value="" disabled>Select field</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="updateitem_input-group">
        <label className="updateitem_input-label">New Value:</label>
          <input
            className="updateitem_input-box"
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            required
            min="0"
            placeholder="New value"
          />
        </div>
        <button className="updateitem_button" type="submit">Update Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
