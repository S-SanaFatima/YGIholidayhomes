import React from 'react';
import './DubaiCommunities.css';

const DubaiCommunities = ({ onNavigate }) => {
  const communities = [
    {
      name: "Dubai Marina",
      description: "Stay in the heart of the city with waterfront apartments, restaurants, nightlife, and leisure activities nearby."
    },
    {
      name: "Downtown Dubai",
      description: "Perfect for guests who want proximity to Burj Khalifa and Dubai Mall, with modern short term rentals in Dubai and easy access to transportation."
    },
    {
      name: "Palm Jumeirah",
      description: "Experience island living with private beach access and stunning views, ideal for holiday homes Dubai."
    },
    {
      name: "Jumeirah Beach Residence",
      description: "Beachfront luxury apartments for families, couples, and leisure travelers seeking high-quality short term rentals in Dubai."
    }
  ];

  return (
    <section className="dubai-communities section">
      <div className="container">
        <h2>Dubai Communities</h2>
        <p className="communities-intro">
          YGI Holiday Homes offers apartments for rent in Dubai across the most popular neighborhoods and lifestyle-focused communities.
        </p>
        <div className="communities-grid">
          {communities.map((community, index) => (
            <div key={index} className="community-card">
              <h3>{community.name}</h3>
              <p>{community.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiCommunities;

