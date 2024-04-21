import React, { useState } from "react";
import "./styles.css";
import { StoreContact } from "../../controller/ContactController";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    StoreContact(data)
      .then((res) => {
        console.log(res);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("We got your equiry, we will back to you soon");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="main-contact">
      <h2>Contact Us</h2>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-detail">
          <h3>Contact Details</h3>
          <p>
            Feel free to reach out to us via email or phone for any inquiries.
          </p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
