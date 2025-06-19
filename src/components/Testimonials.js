import React, { useState } from 'react';
import './Testimonials.css'; // Create this CSS file

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Sarah M.', quote: 'My kids absolutely love the toys from this shop! Great quality and fast delivery.' },
    { id: 2, name: 'John B.', quote: 'Excellent selection of educational toys. My son has learned so much!' },
    { id: 3, name: 'Emily R.', quote: 'The customer service is amazing and the toys are always a hit at birthdays!' },
    { id: 4, name: 'Liam K.', quote: 'Super fast shipping and the packaging was so cute. Highly recommend!' },
    { id: 5, name: 'Anna S.', quote: 'Lovely selection and my daughter adores her new doll!' },
    { id: 6, name: 'Mike T.', quote: 'Great prices and the toys are always top-notch.' },
    { id: 7, name: 'Olivia P.', quote: 'The educational games are so fun and engaging!' },
    { id: 8, name: 'Noah W.', quote: 'Fast delivery and excellent customer service.' },
    { id: 9, name: 'Sophia L.', quote: 'My son can’t stop playing with his new building set!' },
  ];

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const [page, setPage] = useState(0);

  const startIdx = page * CARDS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <div className="testimonials">
      <h2>What Parents and Kids Are Saying</h2>
      <div className="testimonial-list">
        {currentTestimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots" style={{ textAlign: 'center', marginTop: 12 }}>
        {[...Array(totalPages)].map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === page ? ' active' : ''}`}
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              margin: '0 4px',
              borderRadius: '50%',
              background: idx === page ? '#ff6f61' : '#ffe082',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onClick={() => setPage(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;