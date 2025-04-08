import React from 'react';
import './Footer.css'; // Create this CSS file

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/faq">FAQ</a>
        <a href="/shipping">Shipping Policy</a>
        <a href="/returns">Return Policy</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="footer-payment">
        {/* Add your payment method icons here */}
        <img src="placeholder-visa.png" alt="Visa" />
        <img src="placeholder-mastercard.png" alt="Mastercard" />
        {/* ... other payment icons ... */}
      </div>
      <div className="footer-social">
        {/* Add your social media icons here */}
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        {/* ... other social media icons ... */}
      </div>
      <div className="footer-copyright">
        <p>© 2025 Your Toy Shop Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;