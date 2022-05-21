import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageInventories from './pages/Manage Inventories/ManageInventories';
import Navbar from './pages/Navbar/Navbar';
import Register from './pages/Register/Register';
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
