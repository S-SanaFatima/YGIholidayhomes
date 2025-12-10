import React from 'react';
import './DiscoverHolidayHomes.css';

const DiscoverHolidayHomes = () => {
  const features = [
    "Premium apartments for rent in Dubai",
    "Expert online profile management",
    "Hassle-free check-in/check-out process",
    "Full guest support with 24/7 availability"
  ];

  return (
    <section className="discover-holiday-homes section">
      <div className="container">
        <div className="discover-content">
          <div className="discover-text">
            <h2 className="discover-title">
              Discover Holiday Homes in Dubai
            </h2>
            <div className="discover-main-text">
              <p>
                Welcome to YGI Holiday Homes, your trusted partner for finding short term rentals in Dubai that combine comfort, convenience, and style. Whether you are visiting for leisure, business, or family trips, we provide a seamless experience to explore the best apartments for rent in Dubai and curated holiday homes Dubai.
              </p>
              <p>
                At YGI Holiday Homes, every property is carefully selected to meet high standards of design, comfort, and safety. From modern city apartments to waterfront residences, we ensure that every short term rental offers a premium experience with personalized support and 24/7 assistance.
              </p>
              <p>
                Our mission is to make your Dubai stay stress-free, memorable, and perfectly suited to your lifestyle.
              </p>
            </div>

            <div className="discover-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="discover-image">
            <img
              src="/Images/DSC01519.jpg"
              alt="Luxury Dubai apartment interior"
              className="discover-img"
              onError={(e) => {
                console.error('Discover image failed to load:', e.target.src);
                // Fallback to another image
                e.target.src = "/Images/hero1.avif";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverHolidayHomes;

