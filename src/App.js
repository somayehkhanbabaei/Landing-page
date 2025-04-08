import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="logo">YourBrand</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Welcome to YourBrand</h1>
            <p>Create something amazing with our innovative solutions</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Description of your amazing feature 1</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Description of your amazing feature 2</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Description of your amazing feature 3</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best solutions for our customers.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
