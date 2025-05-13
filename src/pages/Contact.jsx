import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:ruiw8767@gmail.com?subject=Message from ${form.name}&body=${form.message}%0D%0A%0D%0AFrom: ${form.email}`;
  };

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Email</button>
      </form>

      <div className="contact-links">
        <a href="www.linkedin.com/in/ruiwang8767" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/RuiW8767" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="tel:+61413636373">Call Me</a>
      </div>
      <div className="contact-row">
        <p className="contact-info">
          Email: <span className="highlight">ruiw8767@gmail.com</span>
        </p>
        <p className="contact-info">
          Phone: <span className="highlight">+61 413 636 373</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
