import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css";
import ContactForm from "../../components/ContactForm/ContactForm";
function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>

      <div id="contact_container">
        <h1>Contact</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6078.037504275379!2d49.8074786!3d40.386277!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1735757086995!5m2!1sru!2saz"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Send Email</h2>

        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default ContactPage;
