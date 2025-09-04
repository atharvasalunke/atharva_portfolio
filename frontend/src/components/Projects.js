import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mockData.personal.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const getEmailButtonText = () => {
    if (emailCopied) return 'Copied!';
    if (emailHovered) return 'Click to copy';
    return mockData.personal.email;
  };
  return (
    <div className="portfolio-container">
      {/* Vertical Ruler */}
      <div className="vertical-ruler">
        <div className="vertical-ruler-numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="vertical-ruler-number">{i + 1}</span>
          ))}
          {/* Intermediate tick marks */}
          {Array.from({ length: 9 }, (_, i) => (
            <span key={`vtick-${i}`} className="vertical-intermediate-tick" style={{ top: `${5 + i * 10}%` }}></span>
          ))}
        </div>
      </div>

      {/* Horizontal Ruler */}
      <div className="document-ruler">
        <div className="ruler-numbers">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="ruler-number">{i + 1}</span>
          ))}
          {/* Intermediate tick marks */}
          {Array.from({ length: 15 }, (_, i) => (
            <span key={`tick-${i}`} className="intermediate-tick" style={{ left: `${3.125 + i * 6.25}%` }}></span>
          ))}
        </div>
      </div>
      
      <div className="document-page">
        <header className="document-header">
          <div className="header-name">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              <span>{mockData.personal.name}</span>
            </Link>
          </div>
          <nav className="header-nav">
            <Link to="/projects" className="nav-link active">Projects</Link>
            <Link to="/about" className="nav-link">About me</Link>
            <button 
              onClick={copyEmailToClipboard} 
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
              className="nav-link email-link copy-email-btn"
              title="Click to copy email"
            >
              {getEmailButtonText()}
            </button>
          </nav>
        </header>

        <section className="projects-page">
          <div className="page-header">
            <h2 className="page-title">All Projects</h2>
            <p className="page-subtitle">A collection of my technical projects and engineering work</p>
          </div>

          <div className="projects-list">
            {mockData.projects.map((project, index) => (
              <div key={index} className="project-detail-card">
                <div className="project-detail-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-detail-img"
                  />
                </div>
                <div className="project-detail-content">
                  <div className="project-detail-header">
                    <h3 className="project-detail-title">{project.title}</h3>
                    <span className="project-detail-category">{project.category}</span>
                  </div>
                  <p className="project-detail-description">{project.fullDescription}</p>
                  <div className="project-detail-tech">
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </div>
                  <div className="project-detail-links">
                    <button className="project-link">
                      View Details <ExternalLink size={14} />
                    </button>
                    <button className="project-link secondary">
                      <Github size={14} /> Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;