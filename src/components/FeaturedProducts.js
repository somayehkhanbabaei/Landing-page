import React, { useState } from 'react';
import './FeaturedProducts.css'; // Create this CSS file

function FeaturedProducts({ onBuy }) {
  const products = [
    {
      id: 1,
      name: 'Awesome Robot Toy',
      image: '/assets/img/robot-toy.jpeg',
      price: '€29.99',
      description: `Meet your child's new best friend! This interactive robot toy dances, talks, and lights up to keep kids entertained for hours.
It helps develop problem-solving skills and encourages creativity through fun programming challenges and games.
Durable, safe, and perfect for both solo and group play.`
    },
    {
      id: 2,
      name: 'Cute Teddy Bear',
      image: '/assets/img/teddy-bear.jpeg',
      price: '€19.99',
      sale: true,
      description: `A classic plush teddy bear with ultra-soft fur and a friendly face.
Perfect for bedtime cuddles, comforting hugs, and imaginative adventures.
Machine washable and made from hypoallergenic materials for safe snuggling.`
    },
    {
      id: 3,
      name: 'Creative Building Set',
      image: '/assets/img/building-set.jpeg',
      price: '€39.99',
      description: `Unleash your child's inner architect! This set includes 150 colorful, sturdy blocks in various shapes and sizes.
Promotes STEM learning, hand-eye coordination, and teamwork as kids build towers, castles, and anything they imagine.
Includes a handy storage box for easy cleanup.`
    },
    {
      id: 4,
      name: 'Interactive Learning Tablet',
      image: '/assets/img/learning-tablet.jpeg',
      price: '€49.99',
      description: `A kid-friendly tablet packed with educational games, e-books, and creative drawing apps.
Features parental controls, a durable shockproof case, and a bright touchscreen.
Helps children learn numbers, letters, and languages while having fun!`
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="featured-products">
      <h2>
        Our Featured Toys <span role="img" aria-label="gift">🎁</span>
      </h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            {product.sale && <span className="sale-badge">Sale</span>}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button onClick={() => setSelected(product)}>View Details</button>
          </div>
        ))}
      </div>
      {selected && (
        <div className="product-modal-overlay" onClick={() => setSelected(null)}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="product-modal-close" onClick={() => setSelected(null)}>&times;</button>
            <img src={selected.image} alt={selected.name} className="product-modal-img" />
            <h2>{selected.name}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{selected.description}</p>
            <div className="product-modal-price">{selected.price}</div>
            <button className="buy-btn" onClick={() => { onBuy(selected); setSelected(null); }}>Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;