import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !name || !description) {
      toast.error("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);

    try {
      const res = await axios.post(
        "http://localhost:3000/projects/addProject",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success("Project added successfully!");
        setImage(null);
        setName("");
        setDescription("");
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Error adding project ❌");
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
      <h2
        style={{
          marginBottom: "20px",
          color: "#2c3e50",
          fontSize: "28px",
          textAlign: "center",
        }}
      >
        Add Project
      </h2>

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
            Project Image:
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ padding: "8px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
            Project Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
            Project Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
          />
        </div>

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
          Submit
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddProject;
