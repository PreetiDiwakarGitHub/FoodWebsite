import React, { useState } from 'react';
import "./Learn.css";

function Learn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="restaurant-container">
      {/* Learn More About Our Food Section */}
      <section id="learn-more" className="section learn-more-section">
        <h2 className="section-title learn-more-title">Learn More About Our Food</h2>
        <p className="section-description learn-more-description">
          At <span className="restaurant-name">[Your Restaurant Name]</span>, we are passionate about creating meals that not only taste amazing but are also made with the highest quality ingredients.
        </p>
      </section>

      {/* How We Make Our Food Section */}
      <section id="how-we-make-food" className="section how-we-make-section">
        <h2 className="section-title how-we-make-title">How We Make Our Food</h2>
        <p className="section-description how-we-make-description">
          We believe that great food starts with fresh, high-quality ingredients sourced sustainably.
        </p>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="section services-section">
        <h2 className="section-title services-title">Our Services</h2>
        <ul className="service-list">
          <li className="service-item dine-in-service"><strong>Dine-In Service:</strong> Enjoy a relaxed meal in our cozy atmosphere.</li>
          <li className="service-item takeout-service"><strong>Takeout:</strong> Quick and easy meals to go.</li>
          <li className="service-item delivery-service"><strong>Delivery:</strong> Enjoy our food from the comfort of your home.</li>
          <li className="service-item catering-service"><strong>Catering:</strong> Perfect for special occasions.</li>
          <li className="service-item custom-orders-service"><strong>Custom Orders:</strong> We accommodate dietary preferences.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="section contact-section">
        <h2 className="section-title contact-title">Contact Us</h2>
        <p className="section-description contact-description">We love hearing from our customers! Reach out to us for any inquiries.</p>

        <h3 className="contact-heading address-heading">Address:</h3>
        <p className="contact-details address-details">[Your Restaurant Address]</p>

        <h3 className="contact-heading phone-heading">Phone:</h3>
        <p className="contact-details phone-details">[Your Contact Number]</p>

        <h3 className="contact-heading email-heading">Email:</h3>
        <p className="contact-details email-details">[Your Email Address]</p>

        <h3 className="contact-heading follow-us-heading">Follow Us:</h3>
        <ul className="social-links">
          <li className="social-item facebook-link"><a href="[Your Facebook Page]" target="_blank">Facebook</a></li>
          <li className="social-item instagram-link"><a href="[Your Instagram Handle]" target="_blank">Instagram</a></li>
          <li className="social-item twitter-link"><a href="[Your Twitter Handle]" target="_blank">Twitter</a></li>
        </ul>

        <h3 className="contact-heading form-heading">Contact Form:</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name" className="form-label name-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input name-input"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="email" className="form-label email-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input email-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="message" className="form-label message-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea message-textarea"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit" className="submit-button form-submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Learn;
