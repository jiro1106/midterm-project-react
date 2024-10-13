import React from 'react';
import '../components/css/DispLow.css';

const DispLow = ({ addedItems }) => {
  // filter items with a quantity of 5 or below
  const lowStockItems = addedItems.filter(item => item.quantity <= 5);

  return (
    <div className="dispLow">
      <h2>Display Low Stock Items</h2>

      {lowStockItems.length > 0 ? (
        <table className="dispLow_items-display">
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
            {lowStockItems.map((item, index) => (
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
        <p>No low stock items found.</p>
      )}
    </div>
  );
};

export default DispLow;
