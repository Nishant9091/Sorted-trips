import React, { useState } from 'react';
import './Faq.css'; // Import your CSS file for styling

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I book a flight?',
      answer: 'You can book a flight by visiting our "Flights" page and entering your travel details. Follow the steps to select your preferred flight and complete the booking process.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking by logging into your account and navigating to the "My Bookings" section. Check the cancellation policy for more details on refunds.'
    },
    {
      question: 'What accommodations do you offer?',
      answer: 'We offer a variety of accommodations, including hotels, resorts, hostels, and vacation rentals. You can filter your search results based on your preferences.'
    },
    {
      question: 'Do I need a visa for international travel?',
      answer: 'Visa requirements vary by country and nationality. Check our "Visa Information" page to find out if you need a visa for your desired destination.'
    },
    // Add more FAQ entries as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="arrow-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
