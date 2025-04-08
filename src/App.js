import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css'; // For global styles

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <FeaturedCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;