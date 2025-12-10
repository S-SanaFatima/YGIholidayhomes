import React from 'react';
import './WhyChooseYGI.css';

const WhyChooseYGI = () => {
  const features = [
    {
      title: "Trusted Expertise",
      description: "With years of experience managing short term rentals in Dubai, we guarantee a safe and seamless experience for all guests. Our team ensures each property meets the highest standards of comfort and service."
    },
    {
      title: "Prime Locations",
      description: "We offer apartments for rent in Dubai across Dubai Marina, Downtown, Palm Jumeirah, and JBR, ensuring you stay in desirable neighborhoods with easy access to shopping, dining, and entertainment."
    },
    {
      title: "Comprehensive Service",
      description: "From the booking process to 24/7 guest support, YGI Holiday Homes manages every detail. Guests can rely on our team to ensure a stress-free stay, making every short term rental Dubai experience smooth and enjoyable."
    },
    {
      title: "Luxury and Comfort",
      description: "Every property is chosen for style, convenience, and premium features. Guests enjoy fully furnished apartments with modern interiors, high-speed Wi-Fi, and all essential amenities."
    },
    {
      title: "Flexible Stay Options",
      description: "Whether you need a few nights, a week, or a month-long stay, our short term rentals in Dubai cater to your schedule without compromising quality or comfort."
    }
  ];

  const firstRow = features.slice(0, 3);
  const lastRow = features.slice(3);

  return (
    <section className="why-choose-ygi section">
      <div className="container">
        <h2>Why Choose YGI Holiday Homes</h2>
        <div className="features-grid">
          {firstRow.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-grid-centered">
          {lastRow.map((feature, index) => (
            <div key={index + 3} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseYGI;
