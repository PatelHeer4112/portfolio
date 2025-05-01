import React from "react";
import "./Certification.css";

const certificates = [
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/learn/python",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/learn/python-data",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/learn/python-network-data",
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/learn/python-data-visualization",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    link: "https://www.coursera.org/learn/computer-networking",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
    link: "https://www.coursera.org/learn/os-power-user",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificates-title">
        <h2>My Certifications</h2>
      </div>
      <div className="certificates-box">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{index + 1}. {cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="view-btn">View</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
