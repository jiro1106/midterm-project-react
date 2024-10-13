import React, { useState } from 'react';
import '../components/css/SortItem.css';

const SortItem = ({ addedItems }) => {
  const [sortBy, setSortBy] = useState('quantity'); // default to sort by quantity
  const [order, setOrder] = useState('ascending'); // default to ascending
  const [sortedItems, setSortedItems] = useState([]);

  const handleSort = (e) => {
    e.preventDefault();

    // create a copy of the addedItems array to sort
    const itemsToSort = [...addedItems];

    // sort the items based on what user selects(ascending,descending,quantity and price)
    itemsToSort.sort((a, b) => {
      if (sortBy === 'quantity') {
        return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else if (sortBy === 'price') {
        return order === 'ascending' ? a.price - b.price : b.price - a.price;
      }
      return 0; // Fallback
    });

    // update the state with the sorted items
    setSortedItems(itemsToSort);
  };

  return (
    <div className="sortItem">
      <h2>Sort Items</h2>
      <form className="sort-form" onSubmit={handleSort}>
        <div className="label_and_select">
          <label htmlFor="sortBy" className="sortitem_input-label">Sort by:</label>
          <select 
            id="sortBy" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="sortitem_input-box"
            required
          >
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="label_and_select">
          <label htmlFor="order" className="sortitem_input-label">Order:</label>
          <select 
            id="order" 
            value={order} 
            onChange={(e) => setOrder(e.target.value)} 
            className="sortitem_input-box"
            required
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <button className="sortitem_button"type="submit">Sort</button>
      </form>

      {sortedItems.length > 0 ? (
        <table className="sortitem_items-display">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default SortItem;
