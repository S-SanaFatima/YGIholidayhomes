import React from 'react';
import './HomeFAQs.css';

const HomeFAQs = () => {
  const faqs = [
    {
      question: "Are your short term rentals in Dubai fully furnished?",
      answer: "Yes, all our apartments for rent in Dubai are fully equipped with modern amenities, providing guests with comfort from day one."
    },
    {
      question: "Can I book a short stay or a long-term stay?",
      answer: "Absolutely. Our short term rentals in Dubai are available for a few nights, weeks, or months depending on your needs."
    },
    {
      question: "Do you provide support during the stay?",
      answer: "Yes, our team offers 24/7 guest support to ensure a smooth experience across all our short term rentals."
    },
    {
      question: "Are your properties safe and verified?",
      answer: "Yes. Each property is carefully verified and maintained to ensure safety, comfort, and high-quality standards."
    },
    {
      question: "Can I choose properties in different neighborhoods?",
      answer: "Yes. We offer apartments for rent in Dubai across Downtown, Dubai Marina, Palm Jumeirah, and JBR to suit every preference."
    },
    {
      question: "Do you provide flexible check-in and check-out?",
      answer: "Yes, all our short term rentals in Dubai offer convenient check-in and check-out options to match your schedule."
    }
  ];

  return (
    <section className="home-faqs section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;

