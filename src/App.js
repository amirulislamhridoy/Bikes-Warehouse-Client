import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import ManageInventories from './pages/Manage Inventories/ManageInventories';
import Navbar from './pages/Navbar/Navbar';
import Update from './pages/Update/Update';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/manageInventories" element={<ManageInventories />} />
        <Route path="/addNewItem" element={<AddNewItem />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
