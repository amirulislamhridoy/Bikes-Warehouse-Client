import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageInventories from './pages/Manage Inventories/ManageInventories';
import Navbar from './pages/Navbar/Navbar';
import Register from './pages/Register/Register';
import Update from './pages/Update/Update';
import MyItem from './pages/MyItem/MyItem';
import NotFound from './pages/NotFound/NotFound'
import RequireAuth from './pages/RequireAuth/RequireAuth.js'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={
        <RequireAuth>
          <Update />
          </RequireAuth>} />
        <Route path="/manageInventories" element={<ManageInventories />} />
        <Route path="/addNewItem" element={<AddNewItem />} />
        <Route path="/myItem" element={<MyItem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
