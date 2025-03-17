import { Routes, Route } from 'react-router-dom';  // Import both Routes and Route
import './App.css';
import Hero from './components/Header/Hero';
import Nav from './components/Navbar/Nav';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
