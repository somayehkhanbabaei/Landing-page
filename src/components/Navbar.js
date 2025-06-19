import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavbarNotification from './NavbarNotification';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CartDropdown from './CartDropdown';


function Navbar({ basket = [], onRemoveFromBasket }) {
  const [cartActive, setCartActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPassword2, setRegPassword2] = useState('');
  const [regErrors, setRegErrors] = useState({});
  const [userName, setUserName] = useState(null);
  const [notif, setNotif] = useState(null);
  const dropdownRef = useRef(null);

  const handleCartClick = (e) => {
    e.preventDefault();
    setCartActive(true);
    setShowDropdown((prev) => !prev);
    setTimeout(() => setCartActive(false), 400);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // Close popups on ESC
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') {
        setShowLogin(false);
        setShowRegister(false);
      }
    }
    if (showLogin || showRegister) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showLogin, showRegister]);

  // Login validation
  const validate = () => {
    const errs = {};
    if (!email) {
      errs.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      errs.email = 'Invalid email address';
    }
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const showNotification = (msg) => {
    setNotif(msg);
    setTimeout(() => setNotif(null), 2000);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const name = email.split('@')[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
      showNotification('Login successful!');
      setShowLogin(false);
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  // Register validation
  const validateRegister = () => {
    const errs = {};
    if (!regName.trim()) {
      errs.name = 'Name is required';
    }
    if (!regEmail) {
      errs.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(regEmail)) {
      errs.email = 'Invalid email address';
    }
    if (!regPassword) {
      errs.password = 'Password is required';
    } else if (regPassword.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (!regPassword2) {
      errs.password2 = 'Please confirm your password';
    } else if (regPassword !== regPassword2) {
      errs.password2 = 'Passwords do not match';
    }
    setRegErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      setUserName(regName);
      showNotification('Registration successful!');
      setShowRegister(false);
      setRegName('');
      setRegEmail('');
      setRegPassword('');
      setRegPassword2('');
      setRegErrors({});
    }
  };

  const handleLogout = () => {
    setUserName(null);
    showNotification('Logged out successfully!');
  };

  return (
    <nav className="main-navbar">
      <NavbarNotification notif={notif} />
      <Link to="/" className="navbar-logo">
        <span role="img" aria-label="toy">🧸</span> Lena Toys
      </Link>
      <ul className="navbar-links">
        <li><Link to="/#shop">Shop</Link></li>
        <li><Link to="/#categories">Categories</Link></li>
        <li><Link to="/#why">Why Us?</Link></li>
        <li><Link to="/#testimonials">Testimonials</Link></li>
        <li><Link to="/#cta">Get 10% Off</Link></li>
      </ul>
      <div className="navbar-cart" ref={dropdownRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {userName && <span className="navbar-username">Hi, {userName}</span>}
        <a href="#cart" className={cartActive ? 'cart-animate' : ''} onClick={handleCartClick}>
          <span role="img" aria-label="cart">🛒</span>
        </a>
        {showDropdown && (
          <CartDropdown
            onSignIn={() => { setShowLogin(true); setShowDropdown(false); }}
            onSignUp={() => { setShowRegister(true); setShowDropdown(false); }}
            onLogout={handleLogout}
            basket={basket}
            onRemove={onRemoveFromBasket}
            userName={userName}
          />
        )}
      </div>
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errors={errors}
        onSubmit={handleLoginSubmit}
      />
      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        regName={regName}
        setRegName={setRegName}
        regEmail={regEmail}
        setRegEmail={setRegEmail}
        regPassword={regPassword}
        setRegPassword={setRegPassword}
        regPassword2={regPassword2}
        setRegPassword2={setRegPassword2}
        regErrors={regErrors}
        onSubmit={handleRegisterSubmit}
      />
    </nav>
  );
}

export default Navbar;
