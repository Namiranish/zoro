import { Routes, Route } from 'react-router-dom';  // Import both Routes and Route
import './App.css';
import Hero from './components/Header/Hero';
import Nav from './components/Navbar/Nav';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/LoginPopUp/Login';
import Ordered from './pages/placeOrder/Ordered';
import Review from './components/Review/Review';

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Nav setShowLogin={setShowLogin} />
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
          <Route path="/end" element={<Ordered/>}/>
          <Route path="/review" element={<Review/>}/>
        </Routes>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
