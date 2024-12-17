import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
