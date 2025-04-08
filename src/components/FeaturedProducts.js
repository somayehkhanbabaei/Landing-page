import React from 'react';
import './FeaturedProducts.css'; // Create this CSS file

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Awesome Robot Toy', image: 'placeholder-robot.jpg', price: '€29.99' },
    { id: 2, name: 'Cute Teddy Bear', image: 'placeholder-bear.jpg', price: '€19.99', sale: true },
    { id: 3, name: 'Creative Building Set', image: 'placeholder-building.jpg', price: '€39.99' },
    { id: 4, name: 'Interactive Learning Tablet', image: 'placeholder-tablet.jpg', price: '€49.99' },
  ];

  return (
    <div className="featured-products">
      <h2>Our Featured Toys</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            {product.sale && <span className="sale-badge">Sale</span>}
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;