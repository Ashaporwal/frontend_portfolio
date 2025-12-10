import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddClient = () => {
  const [clientData, setClientData] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setClientData({ ...clientData, image: files[0] });
    } else {
      setClientData({ ...clientData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", clientData.name);
    formData.append("designation", clientData.designation);
    formData.append("description", clientData.description);
    formData.append("image", clientData.image);

    try {
      await axios.post("https://backend-portfolio-1-ufz6.onrender.com/clients/addClient", formData);

      toast.success("Client added successfully "); 

      setClientData({
        name: "",
        designation: "",
        description: "",
        image: null,
      });

      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("Error adding client "); 
    }
  };

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
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Add Client</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "90%",
          maxWidth: "500px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <input
          name="name"
          placeholder="Name"
          value={clientData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          name="designation"
          placeholder="Designation"
          value={clientData.designation}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={clientData.description}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "80px" }}
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          style={{ padding: "5px" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Add Client
        </button>
      </form>

    
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddClient;
