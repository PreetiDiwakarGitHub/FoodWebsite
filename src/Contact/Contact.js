import React, { useState } from "react";
import "./Contact.css"; // Import the external CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(""); // For handling form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    setError(""); // Clear error message on successful submission
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <div className="contact-error">{error}</div>}

        <label className="contact-label">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          placeholder="Enter your name"
          required
        />

        <label className="contact-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          placeholder="Enter your email"
          required
        />

        <label className="contact-label">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          placeholder="Enter your message"
          required
        />

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
