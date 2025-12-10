import React, { useState } from "react";
import ProjectSection from "./components/ProjectSection";
import ClientsSection from "./components/ClientSection";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";

import AdminLayout from "./admin/AdminLayout";
import About from "./admin/pages/About";


function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      <button
        onClick={handleAdminToggle}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 15px",
          background: "#222",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        {isAdmin ? "Go to Landing Page" : "Open Admin Panel"}
      </button>

      {isAdmin ? (
        <AdminLayout /> 
      ) : (
        <div>
       
          {/* <h1>My Portfolio Page</h1> */}
          <ProjectSection />
             <About/>
          <ClientsSection />
          {/* <ContactForm /> */}
          <Newsletter />
        </div>
      )}
    </div>
  );
}

export default App;
