import React, { useState } from 'react';
import '../components/css/RemoveItem.css';

const RemoveItem = ({ addedItems, onRemoveItem }) => { //call addedItems props and onRemoveItem
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = (e) => {
    e.preventDefault();
    const item = addedItems.find((item) => item.id === id); //find if item exists

    if (item) {
      onRemoveItem(id);
      setMessage(`Item ${item.name} has been removed from the inventory!`);
      setId('');
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="removeItem">
      <h2>Remove Item</h2>
      <form className="remove-form" onSubmit={handleRemove}>
        <div className="removeitem_input-group">
          <label className="removeitem_input-label">ID:</label>
          <input
            className="removeitem_input-box"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        
        <button className="removeitem_button"type="submit">Remove Item</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;
