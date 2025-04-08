import React from 'react';
import './FeaturedCategories.css'; // Create this CSS file

function FeaturedCategories() {
  const categories = [
    { id: 1, name: 'Building Blocks', image: 'placeholder-blocks.jpg', link: '/blocks' },
    { id: 2, name: 'Action Figures', image: 'placeholder-figures.jpg', link: '/figures' },
    { id: 3, name: 'Dolls & Plushies', image: 'placeholder-dolls.jpg', link: '/dolls' },
    { id: 4, name: 'Educational Toys', image: 'placeholder-educational.jpg', link: '/educational' },
  ];

  return (
    <div className="featured-categories">
      <h2>Explore Our Popular Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <button>Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;