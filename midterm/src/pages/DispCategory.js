import React, { useState } from 'react';
import '../components/css/DispCategory.css';

const DispCategory = ({ addedItems }) => { //call the addedItems props
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Clothing', 'Electronics', 'Entertainment']; //3 categories

  const handleCategoryChange = (e) => { //event handling depending on selected category
    setSelectedCategory(e.target.value); 
  };

  // filter items based on the selected category
  const filteredItems = addedItems.filter(item => item.category === selectedCategory);

  return (
    <div className="main">
    <div className="dispCategory">
      <h2>Display Items by Category</h2>
      <div className="dispcategory_input-group">
        <label htmlFor="category" className="dispcategory_input-label">Category:</label>
        <select
          className="dispcategory_input-box"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {filteredItems.length > 0 ? ( //display table if there are items
        <table className="dispCategory_items-display">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found in this category.</p> //else, do not display table
      )}
    </div>
  </div>
  );
};

export default DispCategory;
