import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner/Banner';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
