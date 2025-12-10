import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/contacts/getContacts"
      );
      setContacts(response.data.contacts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        background: "#f4f7fb",
        minHeight: "100vh",
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
        Contact Messages
      </h2>


      <div
        style={{
          display: "flex",
          justifyContent: "center", 
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflowX: "auto",
            width: "90%",
            maxWidth: "900px",
          }}
        >
          {contacts.length > 0 ? (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Segoe UI, sans-serif",
                textAlign: "center", 
                margin: "0 auto",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
                    color: "#fff",
                  }}
                >
                  <th style={thStyle}>#</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Mobile</th>
                  <th style={thStyle}>City</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={contact._id}
                    style={{
                      background: index % 2 === 0 ? "#f9fafb" : "#fff",
                      transition: "0.2s",
                    }}
                  >
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={tdStyle}>{contact.name}</td>
                    <td style={tdStyle}>{contact.email}</td>
                    <td style={tdStyle}>{contact.mobile}</td>
                    <td style={tdStyle}>{contact.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "#777",
                padding: "20px",
              }}
            >
              No contacts available
            </p>
          )}
        </div>
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

export default ContactList;
