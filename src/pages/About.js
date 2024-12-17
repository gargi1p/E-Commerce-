import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our <span className="highlight">E-Commerce Website</span>.<br></br>
        We aim to provide the best shopping experience with intuitive design, fast navigation, and great features.
        </p>
        <div className="about-image-container">
          <img src="https://tse3.mm.bing.net/th?id=OIP.arQQnBm2AgHC85pORiJEhgHaE8&pid=Api&P=0&h=180" alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
