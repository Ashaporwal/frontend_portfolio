import React, { useEffect, useState } from "react";
import axios from "axios";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("https://backend-portfolio-1-ufz6.onrender.com/subscribes/getmails");
        setSubscribers(response.data.subscriber);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubscribers();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#2c3e50",
          fontSize: "28px",
          textAlign: "center",
        }}
      >
        Newsletter Subscribers
      </h2>

      <div
        style={{
          width: "90%",
          maxWidth: "700px",
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
        }}
      >
        {subscribers.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
              fontFamily: "Segoe UI, sans-serif",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
                  color: "#fff",
                }}
              >
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Date</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s, index) => (
                <tr
                  key={s._id}
                  style={{
                    background: index % 2 === 0 ? "#f9fafb" : "#fff",
                    transition: "0.2s",
                  }}
                >
                  <td style={tdStyle}>{s.email}</td>
                  <td style={tdStyle}>{new Date(s.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ padding: "20px", color: "#777", textAlign: "center" }}>
            No subscribers available
          </p>
        )}
      </div>
    </div>
  );
};

const thStyle = {
  padding: "14px",
  fontSize: "15px",
  letterSpacing: "0.5px",
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  borderBottom: "1px solid #e5e7eb",
};

export default Subscribers;
