import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "../assets/styles/contact.css";

export default function ContactCareer() {

  // FORM STATE
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: ""
});


  // HANDLE INPUT CHANGE
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};


  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/inquiries",
        formData
      );
console.log(formData);

      alert("Message sent successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="contct-body">
        <div className="cc-hero-inner">
          <h1>CONTACT</h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="cs-contact-section">
        <div className="cs-contact-container">

          {/* LEFT FORM */}
          <div className="cs-contact-left">

            <h2 className="cs-form-title">
              Connect <span className="highlight">With Us</span>
            </h2>

        <form className="cs-form" onSubmit={handleSubmit}>

  <div className="cs-row">
    <input
      type="text"
      name="name"
      placeholder="Name*"
      value={formData.name}
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email*"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div className="cs-row">
    <input
      type="tel"
      name="phone"
      placeholder="Phone*"
      value={formData.phone}
      onChange={handleChange}
    />

    <input
      type="text"
      name="company"
      placeholder="Company*"
      value={formData.company}
      onChange={handleChange}
    />
  </div>

  <textarea
    name="message"
    placeholder="Message*"
    value={formData.message}
    onChange={handleChange}
  />

  <button type="submit">Send Message</button>

</form>

          </div>

          {/* RIGHT INFO */}
          <div className="cs-contact-right">

            <h3>WHO WE ARE</h3>

            <p>
              Have questions? Contact us and have your questions answered.
            </p>

            <h2 className="cs-form-title">
              Get in <span className="highlight">Touch</span>
            </h2>

            <div className="cs-info-block">
              <img src="/images/location.png" alt="Location" />
              <div className="cs-info-text">
                <p><b>Branch Office</b></p>
                <p>Suite LP64453 20 Wenlock Road London N1 7GU.</p>
              </div>
            </div>

            <div className="cs-info-block">
              <img src="/images/contact.png" alt="Contact" />
              <div className="cs-info-text">
                <p><b>Contact Us</b></p>
                <p>Tel: +447491951577</p>
              </div>
            </div>

            <div className="cs-info-block">
              <img src="/images/mail.png" alt="Email" />
              <div className="cs-info-text">
                <p><b>Mail us</b></p>
                <p>saim@developers-hub.com</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
