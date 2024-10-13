import React, { useState } from 'react';
import '../components/css/SearchItem.css';

const SearchItem = ({ addedItems }) => {
  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    
    // reset previous search results
    setFoundItem(null);
    setErrorMessage('');

    // find the item by ID
    const item = addedItems.find(item => item.id === searchId); //check if ID exists

    if (item) {
      setFoundItem(item);
    } else {
      setErrorMessage('Item not found!');
    }

    // clear the input field
    setSearchId('');
  };

  return (
    <div className="main">
    <div className="searchItem">
      <h2>Search Item by ID</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="searchitem_input-group">
          <label htmlFor="searchId" className="searchitem_input-label">ID:</label>
          
          <input
            type="text"
            id="searchId"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="searchitem_input-box"
            required
          />
        <button className="searchitem_button" type="submit">Search</button>
        </div>
      </form>
      
      {foundItem ? (
        <div className="item-details">
          <h3 className="search-h3">Item Details: </h3>
          <table className="searchitem_items-display">
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
              <tr>
                <td>{foundItem.id}</td>
                <td>{foundItem.name}</td>
                <td>{foundItem.quantity}</td>
                <td>{foundItem.price}</td>
                <td>{foundItem.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>
      )}
    </div>
    </div>
  );
};

export default SearchItem;
 