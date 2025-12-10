import React from 'react';
import './ExploreProperties.css';

const ExploreProperties = ({ onNavigate }) => {
  return (
    <section className="explore-properties section">
      <div className="container">
        <div className="explore-header">
          <h2>Explore Properties, Find Your Ideal Stay</h2>
          <p>
            Finding the perfect short term rental Dubai has never been easier. YGI Holiday Homes specializes in managing a variety of properties across Dubai, from luxury apartments in Downtown to affordable family-friendly apartments in less central areas.
          </p>
        </div>

        <div className="explore-features">
          <div className="feature-box">
            <div className="feature-icon">✓</div>
            <p>Premium apartments for rent in Dubai with modern interiors</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">✓</div>
            <p>Hassle-free check-in and check-out</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">✓</div>
            <p>Full guest support available 24/7</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">✓</div>
            <p>Expert property management for a smooth stay</p>
          </div>
        </div>

        <p className="explore-note">
          Whether you are looking for a weekend escape, a business trip, or a longer stay, our short term rentals in Dubai provide comfort, convenience, and peace of mind for every guest.
        </p>
      </div>
    </section>
  );
};

export default ExploreProperties;

