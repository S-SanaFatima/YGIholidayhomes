import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = ({ onNavigate }) => {
  const [expertForm, setExpertForm] = useState({
    checkIn: '',
    guests: '',
    area: '',
    contactMethod: 'whatsapp'
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleExpertFormSubmit = () => {
    if (!expertForm.checkIn || !expertForm.guests || !expertForm.area) {
      alert('Please fill in all fields');
      return;
    }

    const message = `Hi! I'd like 3 property options for:
- Check-in: ${expertForm.checkIn}
- Guests: ${expertForm.guests}
- Area: ${expertForm.area}
- Contact via: ${expertForm.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}`;

    if (expertForm.contactMethod === 'whatsapp') {
      const whatsappUrl = `https://wa.me/971585498899?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const emailUrl = `mailto:info@ygiholidayhomes.com?subject=Property Options Request&body=${encodeURIComponent(message)}`;
      window.location.href = emailUrl;
    }
    
    setExpertForm({
      checkIn: '',
      guests: '',
      area: '',
      contactMethod: 'whatsapp'
    });
  };

  const handleExpertInputChange = (field, value) => {
    setExpertForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactMethodToggle = (method) => {
    setExpertForm(prev => ({
      ...prev,
      contactMethod: method
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Zara A.",
      location: "Dubai Marina",
      text: "I booked an apartment in Dubai with YGI Holiday Homes and the experience was seamless. The apartment was spotless, fully furnished, and in a perfect location."
    },
    {
      name: "Ahmed K.",
      location: "Downtown Dubai",
      text: "YGI Holiday Homes made my corporate stay effortless. Everything was ready when I arrived, and support was available 24/7."
    },
    {
      name: "Sarah T.",
      location: "Jumeirah Beach",
      text: "Perfect for a family vacation. Spacious apartment, fully equipped, and very comfortable. Highly recommended for anyone looking to book apartments in Dubai."
    }
  ];

  const faqs = [
    {
      question: "How do I book an apartment with YGI Holiday Homes?",
      answer: "You can browse our listings, select your preferred apartment, and book directly online or contact our team via WhatsApp or email."
    },
    {
      question: "Are all apartments fully furnished?",
      answer: "Yes, all our apartments are fully furnished and equipped with modern amenities for a comfortable stay."
    },
    {
      question: "Can I stay for short or long-term rentals?",
      answer: "Yes, we offer flexible stays ranging from a few nights to several months depending on your requirements."
    },
    {
      question: "Is support available during my stay?",
      answer: "Absolutely! Our team is available 24/7 to assist with any questions, requests, or emergencies."
    },
    {
      question: "Are the locations convenient?",
      answer: "Yes, our apartments are located in Dubai's most connected neighborhoods, close to business hubs, beaches, shopping malls, and popular attractions."
    },
    {
      question: "Do you offer transparent pricing?",
      answer: "Yes, we provide clear, upfront pricing with no hidden fees, so you know exactly what you will pay."
    }
  ];

  const whyBookFeatures = [
    {
      title: "Prime Locations",
      description: "Our apartments are strategically located in Dubai's most vibrant and convenient neighborhoods, including Dubai Marina, Downtown Dubai, Palm Jumeirah, and Jumeirah Beach. You can stay close to iconic landmarks, shopping destinations, beaches, and entertainment hubs while enjoying the comfort of a fully-equipped home."
    },
    {
      title: "Fully Furnished and Ready-to-Stay",
      description: "All our apartments are fully furnished and equipped with modern amenities such as high-speed Wi-Fi, smart TVs, quality linens, and complete kitchens. You can move in immediately and start enjoying your stay without any hassle."
    },
    {
      title: "Premium Quality and Comfort",
      description: "Every apartment meets hotel-grade standards for comfort, cleanliness, and convenience. From interior design to safety features, each property is maintained to provide the highest standards for our guests."
    },
    {
      title: "24/7 Customer Support",
      description: "Our real people support team is available anytime to address your queries, handle emergencies, or assist with your stay. This ensures that your Dubai holiday home experience is stress-free and enjoyable."
    },
    {
      title: "Transparent and Flexible Booking",
      description: "We offer flexible booking options with transparent pricing. Whether it is a short weekend stay or a long-term rental, our platform allows you to book apartments in Dubai easily and confidently."
    },
    {
      title: "Secure and Safe Environment",
      description: "All our properties are located in secure buildings with 24/7 security, CCTV surveillance, and smart lock systems. Your safety and peace of mind are our top priorities during your stay in Dubai."
    }
  ];

  const services = [
    "Verified Apartments for Rent in Dubai: High-quality apartments, inspected and maintained to ensure top standards.",
    "Seamless Booking: Easy-to-use online platform for instant booking and secure payments.",
    "Flexible Stays: Options for short-term and long-term rentals.",
    "24/7 Guest Support: Assistance available anytime during your stay.",
    "Luxury and Comfort: Premium furnishings, amenities, and hotel-grade standards in every property."
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content-centered">
            <h1 className="hero-title">Your Gateway to Luxury in Dubai</h1>
            <p className="hero-subtitle">
              Hotel-grade comfort with home warmth
            </p>
            
            {/* Highlight Boxes */}
            <div className="hero-highlights">
              <div className="highlight-box">
                <div className="highlight-number">4,300+</div>
                <div className="highlight-label">Happy Clients</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-number">1,550+</div>
                <div className="highlight-label">Apartments Rented</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-number">24/7</div>
                <div className="highlight-label">Support</div>
              </div>
            </div>
            
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => onNavigate('book')}>Book Now</button>
              <button className="btn btn-secondary rent-property-btn" onClick={() => onNavigate('expert')}>List Property</button>
            </div>
          </div>
        </div>
      </section>

      {/* About YGI Holiday Homes Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-card">
            <h2>About YGI Holiday Homes</h2>
            <p>
              YGI Holiday Homes is your trusted partner for finding and booking apartments for rent in Dubai. We specialize in providing fully-furnished, hotel-standard accommodations that combine comfort, style, and convenience. Whether you are visiting Dubai for business, family vacations, or weekend getaways, our properties are designed to offer an exceptional experience.
            </p>
            <p>
              Every apartment we offer is carefully selected to meet high-quality standards. From modern amenities and tasteful interiors to secure locations and excellent connectivity, we ensure that your stay is seamless, safe, and enjoyable. With YGI Holiday Homes, you can easily book apartments in Dubai without compromising on quality or comfort.
            </p>
            <div className="perks-chips">
              <span className="perk-chip">Flexible Stays</span>
              <span className="perk-chip">Transparent Pricing</span>
              <span className="perk-chip">24/7 Support</span>
              <span className="perk-chip">Verified Properties</span>
            </div>
            <p className="trust-statement">
              With over 1,550 apartments rented and 4,300+ satisfied clients, YGI Holiday Homes has become a trusted platform for anyone looking to book apartments in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose YGI Holiday Homes */}
      <section className="why-choose-ygi">
        <div className="container">
          <h2>Why Choose YGI Holiday Homes?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <h3>Flexible Stays</h3>
              <p>Stay for a few nights, weeks, or even months with options tailored to your schedule.</p>
            </div>
            <div className="why-choose-item">
              <h3>Transparent Pricing</h3>
              <p>Clear rates, no hidden fees, and straightforward policies for every booking.</p>
            </div>
            <div className="why-choose-item">
              <h3>24/7 Support</h3>
              <p>Our dedicated team is available around the clock to assist with any needs.</p>
            </div>
            <div className="why-choose-item">
              <h3>Verified Properties</h3>
              <p>Each apartment is inspected and maintained to guarantee a premium experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Your Apartments in Dubai With Us */}
      <section className="why-book-with-us">
        <div className="container">
          <h2>Why Book Your Apartments in Dubai With Us</h2>
          <div className="why-book-grid">
            {whyBookFeatures.map((feature, index) => (
              <div key={index} className="why-book-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              YGI Holiday Homes was founded with a vision to redefine the rental experience in Dubai. We wanted to provide travelers with apartments that offer both the convenience of a hotel and the comfort of home. Starting with a few select properties, we have grown to manage over 1,550 apartments, serving thousands of happy clients across Dubai.
            </p>
            <p>
              We focus on combining luxury, convenience, and affordability. Each apartment is carefully chosen and maintained to ensure guests enjoy the best experience possible. Whether it is a business assignment, family vacation, or leisure trip, our properties cater to every need.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="our-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">✓</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
          <p className="services-cta">
            By choosing YGI Holiday Homes, you can effortlessly book apartments in Dubai that are safe, luxurious, and ready for your stay.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span> – {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <div className="container">
          <h2>FAQs</h2>
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Ask an Expert */}
      <section className="ask-expert-section">
        <div className="container">
          <div className="expert-card">
            <div className="expert-avatar">
              <span>Z</span>
            </div>
            <div className="expert-content">
              <h3>Hi! I'm Zara from YGI Holiday Homes. Tell me your dates, number of guests, and preferred area—I'll send 3 perfect options for your stay.</h3>
              <div className="expert-form">
                <input 
                  type="date" 
                  placeholder="Check-in date" 
                  value={expertForm.checkIn}
                  onChange={(e) => handleExpertInputChange('checkIn', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Guests" 
                  min="1"
                  max="10"
                  value={expertForm.guests}
                  onChange={(e) => handleExpertInputChange('guests', e.target.value)}
                />
                <select 
                  value={expertForm.area}
                  onChange={(e) => handleExpertInputChange('area', e.target.value)}
                >
                  <option value="">Select area</option>
                  <option value="Dubai Marina">Dubai Marina</option>
                  <option value="Palm Jumeirah">Palm Jumeirah</option>
                  <option value="Downtown Dubai">Downtown Dubai</option>
                  <option value="Jumeirah Beach">Jumeirah Beach</option>
                </select>
                <div className="contact-toggle">
                  <button 
                    className={`toggle-btn ${expertForm.contactMethod === 'whatsapp' ? 'active' : ''}`}
                    onClick={() => handleContactMethodToggle('whatsapp')}
                  >
                    WhatsApp
                  </button>
                  <button 
                    className={`toggle-btn ${expertForm.contactMethod === 'email' ? 'active' : ''}`}
                    onClick={() => handleContactMethodToggle('email')}
                  >
                    Email
                  </button>
                </div>
                <button className="expert-submit" onClick={handleExpertFormSubmit}>Check Availability</button>
              </div>
              <p className="response-time">Avg response under 10 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
