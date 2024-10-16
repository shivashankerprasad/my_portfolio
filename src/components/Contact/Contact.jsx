import React, { useState } from 'react';
import '../../css/Contact.css';

const Contact = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
            I'd love to here from you! Thank you for visiting please share your thoughts
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Email: <a href="mailto:shivasaggapu96@gmail.com">shivasaggapu96@gmail.com</a></p>
            <p>Phone: <a href="tel:+919949860490">+919949860490</a></p>
            <p>Location: Hyderabad, India</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <textarea placeholder="Feedback" required></textarea>

            {/* Star Rating Section */}
            <div className="rating-section">
              <p>Rate your experience:</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleRating(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
