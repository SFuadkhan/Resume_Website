import React, { useState } from "react";
import "./index.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:s.fuad019@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `\n\n${message}\n\n${name}\n\n${email}\n`
    )}`;

    window.location.href = mailtoLink; // Open the default email client
  };

  return (
    <div>
      <form id="contact_form" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-container">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="input-container subject">
          <input
            type="text"
            id="subject"
            placeholder=" "
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="input-container textarea">
          <textarea
            id="message"
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
