import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css'; // For global styles

function App() {
  const [basket, setBasket] = useState([]);

  const handleBuy = (product) => {
    setBasket(prev => [...prev, product]);
  };

  const handleRemoveFromBasket = (id) => {
    setBasket(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar
        basket={basket}
        onRemoveFromBasket={handleRemoveFromBasket}
      />
      <div id="shop">
        <HeroSection />
      </div>
      <div id="categories">
        <FeaturedCategories />
      </div>
      <div id="why">
        <WhyChooseUs />
      </div>
      <div id="products">
        <FeaturedProducts onBuy={handleBuy} />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="cta">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;