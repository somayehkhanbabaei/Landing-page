import React from 'react';
import './WhyChooseUs.css'; // Create this CSS file

function WhyChooseUs() {
  const reasons = [
    { id: 1, title: 'Wide Selection', description: 'Thousands of toys from popular brands and unique finds.', icon: 'fa-cubes' }, // Example Font Awesome icon
    { id: 2, title: 'Quality & Safety', description: 'We carefully select toys that are safe, durable, and built to last.', icon: 'fa-shield-alt' },
    { id: 3, title: 'Educational Value', description: 'Discover toys that encourage learning, creativity, and problem-solving skills.', icon: 'fa-lightbulb' },
    { id: 4, title: 'Fast & Reliable Shipping', description: 'Enjoy quick and hassle-free delivery right to your doorstep.', icon: 'fa-truck' },
    { id: 5, title: 'Excellent Customer Support', description: 'Our friendly team is here to assist you with any questions.', icon: 'fa-headset' },
  ];

  return (
    <div className="why-choose-us">
      <h2>
        Why Choose Lena Toys? <span role="img" aria-label="heart">💖</span>
      </h2>
      <div className="reasons-list">
        {reasons.map(reason => (
          <div key={reason.id} className="reason-item">
            <i className={`fas ${reason.icon}`}></i> {/* Assuming you have Font Awesome integrated */}
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;