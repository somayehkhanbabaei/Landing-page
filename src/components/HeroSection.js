import React from 'react';
import './HeroSection.css'; // Create this CSS file

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>The Ultimate Toy Shop for Kids of All Ages</h1>
        <p>Explore our wide selection of high-quality, educational, and fun toys that spark imagination and joy.</p>
        <div className="hero-buttons">
          <button className="primary-button">Shop Now!</button>
          <button className="secondary-button">Browse by Age</button>
        </div>
        <div className="trust-signals">
          <p>Free Shipping on Orders Over €50</p>
          <p>Trusted by Parents</p>
        </div>
      </div>
      {/* You would typically have an image or video here */}
      <div className="hero-image">
        {/* Replace with your actual image or video component */}
        <img src="/assets/img/heroSection.jpg" alt="Happy kids playing with toys" />
      </div>
    </div>
  );
}

export default HeroSection;