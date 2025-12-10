import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm"; // Ensure path correct ho

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/projects/getProject"
        );
        setProjects(response.data.project);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      <div
        style={{
          width: "100%",
          height: "70px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#111", fontWeight: "bold", margin: 0 }}>RealTrust</h2>

        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <span>Home</span>
          <span>Services</span>
          <span>Projects</span>
          <span>Testimonials</span>

          <button
            style={{
              padding: "8px 18px",
              background: "darkorange",
              border: "none",
              // borderRadius: "20px",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Contact
          </button>
        </div>
      </div>


      <section
        style={{
          height: "420px",
          backgroundImage: `url("/images/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          boxSizing: "border-box",
        }}
      >
  
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.50)",
            zIndex: 1,
          }}
        ></div>

 
        <div
          style={{
            color: "#fff",
            maxWidth: "500px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Welcome to RealTrust
          </h1>
  
        </div>

   
        <div style={{ position: "relative", zIndex: 2  }}>
          <ContactForm />
        </div>
      </section>


      <section
        style={{
          padding: "70px 6%",
          background: "#f5f7fb",
          textAlign: "center",
        }}
      >
<h2 style={{ fontSize: "34px", marginBottom: "10px", color: "#5dade2" }}>
  Our Projects
</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 50px",
            color: "#555",
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          We know what buyers are looking for and suggest projects that will
          bring clients top value for their homes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "25px",
            maxWidth: "1400px",
            margin: "0 auto",
            color:"skyblue"
          }}
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  height: "320px",
                }}
              >
                <div style={{ height: "150px" }}>
                  <img
                    src={`http://localhost:3000/${project.image}`}
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "16px" }}>{project.name}</h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        height: "60px",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <button
                    style={{
                      background: "darkorange",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "5px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;








