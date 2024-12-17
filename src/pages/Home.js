import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/products');
  };

  return (
    <div className="home-container">
      <h1>Welcome to My E-Commerce Website</h1>
      <p>Find the best products here!</p>
      <button className="start-btn" onClick={handleStartShopping}>
        Start Shopping
      </button>
    </div>
  );
};

export default Home;
