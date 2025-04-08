import React from 'react';
import './FeaturedCategories.css'; // Create this CSS file

function FeaturedCategories() {
  const categories = [
    { id: 1, name: 'Building Blocks', image: '/assets/img/cate1.jpg', link: '/blocks' },
    { id: 2, name: 'Action Figures', image: '/assets/img/cate2.jpg', link: '/figures' },
    { id: 3, name: 'Dolls & Plushies', image: '/assets/img/cate3.jpg', link: '/dolls' },
    { id: 4, name: 'Educational Toys', image: '/assets/img/cate4.jpg', link: '/educational' },
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