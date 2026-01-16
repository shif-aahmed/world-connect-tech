import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactPage">
      {/* Page Heading */}
      <h1 className="contactHeading">Contact Us</h1>

      {/* Contact Form */}
      <form className="contactForm">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          placeholder="Your Message (Optional)"
          name="message"
          rows="6"
        ></textarea>
        <button type="submit" className="submitButton">Submit</button>
      </form>

      {/* Consent / Disclaimer Text */}
      <p className="consentText">
        By submitting this form or providing your details, you consent to World Connect Tech and 
        its affiliated service providers using automated systems—including but not limited to 
        texts, phone calls, prerecorded messages, emails, or digital communications—to contact 
        you regarding World Connect Tech offers, which may or may not be directly related to 
        this specific promotion. This consent is not mandatory to make a purchase. Clicking the 
        submit button serves as your electronic signature. World Connect Tech is your one-stop 
        solution for TV, Internet, and Phone services, providing the best deals in your area, guaranteed.
      </p>
    </div>
  );
};

export default Contact;
