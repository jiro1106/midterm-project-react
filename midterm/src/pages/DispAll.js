import React from 'react';  
import '../components/css/DispAll.css';

const DispAll = ({ addedItems = [] }) => { //use the props addedItems to pass the data to table
  return (
    <div className="main">
    <div className="dispAll">
      <h2>Display All Items</h2>
      {addedItems.length > 0 ? (
        <table className="dispAll_items-display">
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
            {addedItems.map((item, index) => (
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
        <p>No items to display.</p> //else, nothing to display
      )}
    </div>
  </div>
  );
};

export default DispAll;
