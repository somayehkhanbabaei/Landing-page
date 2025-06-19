import React from 'react';
import './Footer.css';

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
        <span>We accept:</span>
        <div className="footer-payment-icons">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-copyright">
        <p>© 2025 Lena Toys. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;