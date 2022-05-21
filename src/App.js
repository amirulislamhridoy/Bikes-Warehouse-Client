import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Update from './pages/Update/Update';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
