import React, { useState } from "react";
import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";
import ContactList from "./pages/ContactList";
import Subscribers from "./pages/Subscribers";

const AdminLayout = () => {
  const [page, setPage] = useState("project");

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Panel</h1>

    
      <div style={{ marginBottom: "20px" }}>
        <button style={btn} onClick={() => setPage("project")}>Add Project</button>
        <button style={btn} onClick={() => setPage("client")}>Add Client</button>
        <button style={btn} onClick={() => setPage("contact")}>Contact List</button>
        <button style={btn} onClick={() => setPage("subscriber")}>Subscribers</button>
      </div>

  
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
        {page === "project" && <AddProject />}
        {page === "client" && <AddClient />}
        {page === "contact" && <ContactList />}
        {page === "subscriber" && <Subscribers />}
      </div>
    </div>
  );
};


const btn = {
  padding: "10px 15px",
  marginRight: "10px",
  marginBottom: "10px",
  cursor: "pointer",
  border: "1px solid #007bff",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "14px",
};

export default AdminLayout;


