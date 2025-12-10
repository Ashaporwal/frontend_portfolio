import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {

      const res = await axios.post("http://localhost:3000/subscribes/saveemails", { email });

      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to subscribe.");
    }
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>

      <section
        style={{
          position: "relative",
          height: "400px",
          background: `url("/images/images (5).jpeg") center/cover no-repeat`,
        }}
      >
 
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>


        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
            Subscribe to our Newsletter
          </h1>
          {message && (
            <p style={{ fontSize: "14px", color: "#fff", marginBottom: "10px" }}>
              {message}
            </p>
          )}
        </div>
      </section>

 
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 6%",
          backgroundColor: "#007bff",
          color: "#fff",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {["home", "services", "projects", "testimonials", "contact"].map((sec) => (
            <span
              key={sec}
              onClick={() => scrollToSection(sec)}
              style={{ cursor: "pointer", fontWeight: 500 }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </span>
          ))}
        </div>


        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            maxWidth: "300px",
            flex: 1,
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              minWidth: "0",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 12px",
              backgroundColor: "#fff",
              color: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
