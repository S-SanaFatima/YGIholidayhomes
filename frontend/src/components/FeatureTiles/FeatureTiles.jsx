import React from 'react';
import './FeatureTiles.css';

const FeatureTiles = ({ onNavigate }) => {
  const tiles = [
    {
      id: 1,
      title: "Explore Best Apartments in Dubai",
      subtitle: "Browse our portfolio of apartments for rent in Dubai featuring modern furnishings, fully equipped kitchens, and premium amenities. We offer flexible booking options, ensuring guests can stay for a few nights or several months in comfort and style.",
      cta: "Explore Properties",
      image: "/Images/66ded2500ba8686872db2330_RHONJ_S8E10-11_Casa Baglioni _1-topaz.avif",
      navigateTo: "book"
    },
    {
      id: 2,
      title: "Flexible Short Term Rentals",
      subtitle: "YGI Holiday Homes offers flexible short term rentals in Dubai with convenient booking and stay options: Daily, weekly, or monthly stays available. Options for families, couples, and solo travelers. Secure online booking with instant confirmation.",
      cta: "View Rentals",
      image: "/Images/66ded489b23da42fb7825969_RHONJ_S10E11-12_Hamptons-3.avif",
      navigateTo: "book"
    }
  ];

  return (
    <section className="feature-tiles section">
      <div className="container">
        <div className="tiles-grid grid grid-3">
          {tiles.map((tile) => (
            <div key={tile.id} className="feature-tile">
              <div className="tile-image-container">
                <img 
                  src={tile.image} 
                  alt={tile.title}
                  className="tile-image"
                />
                <div className="tile-overlay">
                  <div className="tile-content">
                    <h3 className="tile-title">{tile.title}</h3>
                    <p className="tile-subtitle">{tile.subtitle}</p>
                    <button 
                      className="tile-cta"
                      onClick={() => onNavigate(tile.navigateTo)}
                    >
                      {tile.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
