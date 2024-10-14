import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mininav from './components/MiniNav/Mininav';
import Header from './components/Header/Header';
import Shop from './pages/Shop/Shop';
import Shopcategory from './pages/Shopcategory/Shopcategory';
import Products from './pages/Products/Products';
import Cartpage from './pages/Cartpage/Cartpage';
import Loginsignup from './pages/Loginsignup/Loginsignup';
import Contact from './pages/Contact/Conatact'; 
import Footer from './components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';
import electronics_banner from './assets/banner_electronics.png';
import kitchen_banner from './assets/banner_kitchen.png';
import cosmetics_banner from './assets/banner_cosmetics.png';
import footware from './assets/footware_banner1.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Mininav />
          <ConditionalHeader />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/Men' element={<Shopcategory banner={men_banner} category="men" />} />
            <Route path='/Women' element={<Shopcategory banner={women_banner} category="women" />} />
            <Route path='/Kids' element={<Shopcategory banner={kids_banner} category="kid" />} />
            <Route path='/Electronics' element={<Shopcategory banner={electronics_banner} category="electronics" />} />
            <Route path='/Kitchen' element={<Shopcategory banner={kitchen_banner} category="kitchen" />} />
            <Route path='/Footware' element={<Shopcategory banner={footware} category="footwear" />} />
            <Route path='/Cosmetics' element={<Shopcategory banner={cosmetics_banner} category="cosmetics" />} />
            <Route path='/Product/:productId' element={<Products />} /> {/* Ensure correct path */}
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/login' element={<Loginsignup />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer/>
      </div>
    </>
  );

  function ConditionalHeader() {
    const location = useLocation();
    return location.pathname === '/' ? <Header /> : null;
  }
}

export default App;
