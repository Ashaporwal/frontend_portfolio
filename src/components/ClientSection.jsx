import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "https://backend-portfolio-1-ufz6.onrender.com/clients/getClients"
        );
        setClients(response.data.clientList);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section
      style={{
        marginTop:"10px",
        padding: "2px 6%",
      
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          margin: "0 0 20px 0",
          color: "#45b7ceff",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Happy Clients
      </h2>

      <div
        className="clients-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          justifyContent: "center",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {clients.length > 0 ? (
          clients.map((client) => (
            <div
              key={client._id}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", 
                height: "auto", 
                maxWidth: "220px",
                textAlign: "center",
              }}
            >
              <img
                src={`https://backend-portfolio-1-ufz6.onrender.com/${client.image}`}
                alt={client.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "10px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h3
                style={{
                  fontSize: "15px",
                  marginBottom: "6px",
                  color: "#45b7ce",
                }}
              >
                {client.name}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: "1.4",
                  marginBottom: "8px",
                }}
              >
                {client.description}
              </p>
              <small
                style={{
                  color: "#999",
                  fontSize: "11px",
                }}
              >
                {client.designation}
              </small>
            </div>
          ))
        ) : (
          <p style={{ color: "#777", fontSize: "16px" }}>
            No clients available right now.
          </p>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;

