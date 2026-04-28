import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WarningModal() {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT TO BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/warningmessage/createwarningmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShow(false);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* LEFT IMAGE */}
        <div className="modal-left">
          <img
            src="https://developers-hub.com/wp-content/uploads/2025/07/warning-e1753363083987.avif"
            alt="warning"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="modal-right">
          <h2 className="modal-title">Warning</h2>

          <p className="modal-text">
            Developers Hub (Pvt.) Ltd. has no affiliation or association with Developers Hub Corporation. We do not request or accept any form of payment for internships or employment opportunities. For any further inquiries, please contact us at hr@developers-hub.com.

          </p>

          <p className="modal-email">hr@developers-hub.com</p>

          {/* FORM */}
          <form className="modal-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="btn-right">
              <button type="submit">Send Message</button>
            </div>
          </form>

          {/* CLOSE BUTTON */}
          <button className="close-btn" onClick={() => setShow(false)}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}