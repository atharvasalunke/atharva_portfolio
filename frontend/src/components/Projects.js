import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="portfolio-container">
      <div className="document-ruler">
        <div className="ruler-numbers">
          {Array.from({ length: 25 }, (_, i) => (
            <span key={i} className="ruler-number">{i + 1}</span>
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
            <a href={`mailto:${mockData.personal.email}`} className="nav-link email-link">
              {mockData.personal.email}
            </a>
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
                  <div className="project-placeholder large">
                    <span className="project-icon">🚀</span>
                  </div>
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