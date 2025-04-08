import React from 'react';
import './Testimonials.css'; // Create this CSS file

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Sarah M.', quote: 'My kids absolutely love the toys from this shop! Great quality and fast delivery.' },
    { id: 2, name: 'John B.', quote: 'Excellent selection of educational toys. My son has learned so much!' },
    // Add more testimonials
  ];

  return (
    <div className="testimonials">
      <h2>What Parents and Kids Are Saying</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;