import React from 'react';
import './HomeCTA.css';

const HomeCTA = ({ onNavigate }) => {
  return (
    <section className="home-cta section">
      <div className="container">
        <div className="cta-content">
          <h2>Book Your Stay Today</h2>
          <p>
            Whether you are looking for short term rentals in Dubai, luxury apartments for rent, or family-friendly holiday homes Dubai, YGI Holiday Homes makes your booking simple and stress-free.
          </p>
          <p>
            Enjoy the best of Dubai with comfort, convenience, and peace of mind, backed by our professional team and 24/7 support.
          </p>
          <p className="cta-tagline">
            YGI Holiday Homes, redefining short term rentals in Dubai with quality, service, and luxury
          </p>
          <button 
            className="cta-button"
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;

