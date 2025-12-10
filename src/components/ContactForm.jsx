import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/contacts/addContact",formData);
      setMessage(response.data.message);
      setFormData({ name: "", email: "", mobile: "", city: "" }); // clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to submit form.");
    }
  };

  return (
    <section
      style={{
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >

        </h2>

        {message && (
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            {message}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0, 31, 77, 0.70)",
            
            padding: "20px",
            // borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            backdropFilter: "blur(6px)", 
          }}
        >
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              marginTop: "3px",
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Get a Free Consultation
          </p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "darkorange",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            Get Quick Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
