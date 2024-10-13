  import './App.css';
  import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; //react-router
  import { useState } from 'react';
  import AddItem from './pages/AddItem';
  import UpdateItem from './pages/UpdateItem';
  import DispAll from './pages/DispAll';
  import NoPage from './pages/NoPage';
  import DispCategory from './pages/DispCategory';
  import DispLow from './pages/DispLow';
  import SearchItem from './pages/SearchItem';
  import SortItem from './pages/SortItem';
  import RemoveItem from './pages/RemoveItem';

  function NavigationButtons() {
    const navigate = useNavigate();

    return (
      <div className="nav-buttons">
        <button onClick={() => navigate('/addItem')} className="nav-button">Add Item</button>
        <button onClick={() => navigate('/updateItem')} className="nav-button">Update Item</button>
        <button onClick={() => navigate('/displayAll')} className="nav-button">Display All</button>
        <button onClick={() => navigate('/displayByCategory')} className="nav-button">Display By Category</button>
        <button onClick={() => navigate('/displayLowStock')} className="nav-button">Display Low Stock Items</button>
        <button onClick={() => navigate('/searchItem')} className="nav-button">Search Item</button>
        <button onClick={() => navigate('/sortItem')} className="nav-button">Sort Item</button>
        <button onClick={() => navigate('/removeItem')} className="nav-button">Remove Item</button>
      </div> //links for different sections
    );
  }

  function App() { 
    const [addedItems, setAddedItems] = useState([]); //props passed to different sections so data can be passed

    const handleAddItem = (newItem) => {
      setAddedItems((prevItems) => [...prevItems, newItem]);
    };

    const handleUpdateItem = (updatedItem) => {
      setAddedItems((prevItems) =>
        prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
    };

    const handleRemoveItem = (id) => {
      setAddedItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
      <div className="App">
        <h1 className="titleName">Inventory Management System</h1>
        <BrowserRouter>
          <NavigationButtons />
          <Routes>
            <Route index element = {<AddItem/>} />
            <Route path="/addItem" element={<AddItem onAddItem={handleAddItem} addedItems={addedItems} />} />
            <Route path="/updateItem" element={<UpdateItem addedItems={addedItems} onUpdateItem={handleUpdateItem} />} />
            <Route path="/displayAll" element={<DispAll addedItems={addedItems} />} />
            <Route path="/displayByCategory" element={<DispCategory addedItems={addedItems} />} />
            <Route path="/displayLowStock" element={<DispLow addedItems={addedItems} />} />
            <Route path="/searchItem" element={<SearchItem addedItems={addedItems} />} />
            <Route path="/sortItem" element={<SortItem addedItems={addedItems} />} />
            <Route path="/removeItem" element={<RemoveItem addedItems={addedItems} onRemoveItem={handleRemoveItem} />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
