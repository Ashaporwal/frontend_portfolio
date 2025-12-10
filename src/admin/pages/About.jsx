import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1000px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >

        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <img
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

     
        <div
          style={{
            flex: "2 1 400px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "32px", color: "#1d4ed8", marginBottom: "20px" }}>
            About Us
          </h1>
          <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.7", marginBottom: "20px" }}>
            Welcome to our platform! We are passionate about delivering the best digital solutions
            to our clients. Our team combines creativity, technology, and innovation to create 
            seamless user experiences and outstanding results.
          </p>
          <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.7" }}>
            We focus on quality, efficiency, and building long-term relationships. Our mission
            is to empower businesses to grow by providing tools and services that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
