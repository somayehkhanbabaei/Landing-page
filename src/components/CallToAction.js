import React from 'react';
import './CallToAction.css'; // Create this CSS file

function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="cta-content">
        <h2>
          Ready to Find the Perfect Toy? <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <p>
          Get 10% off your first order! Use code <b>WELCOME10</b> at checkout.<br />
          Join our happy family of playful kids and parents!
        </p>
        <button className="primary-button">Start Shopping Now!</button>
        {/* Optional Email Signup */}
        <div className="email-signup">
          <input type="email" placeholder="Enter your email" />
          <button>Sign Up for Updates</button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
