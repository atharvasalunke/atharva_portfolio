import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Document ruler/numbering */}
      <div className="document-ruler">
        <div className="ruler-numbers">
          {Array.from({ length: 25 }, (_, i) => (
            <span key={i} className="ruler-number">{i + 1}</span>
          ))}
        </div>
      </div>
      
      {/* Document content */}
      <div className="document-page">
        {/* Header */}
        <header className="document-header">
          <div className="header-name">
            <h1>{mockData.personal.name}</h1>
          </div>
          <nav className="header-nav">
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About me</Link>
            <a href={`mailto:${mockData.personal.email}`} className="nav-link email-link">
              {mockData.personal.email}
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">{mockData.personal.heroTitle}</h2>
            <p className="hero-description">{mockData.personal.heroDescription}</p>
            
            <div className="social-links">
              <span className="connect-text">Connect with me here:</span>
              <div className="social-icons">
                <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={20} />
                </a>
                <a href={`mailto:${mockData.personal.email}`} className="social-icon">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="featured-work">
          <div className="section-header">
            <h3 className="section-title">My featured work</h3>
            <Link to="/projects" className="view-all-link">View all</Link>
          </div>
          
          <div className="projects-grid">
            {mockData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <span className="project-icon">🚀</span>
                  </div>
                </div>
                <div className="project-info">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-category">{project.category}</p>
                  <button className="project-link">
                    Case study <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h3 className="section-title">Services I offer</h3>
          
          <div className="services-grid">
            {mockData.services.map((service, index) => (
              <div key={index} className="service-item">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="document-footer">
          <div className="footer-contact">
            <p className="footer-text">Get in touch with me at</p>
            <a href={`mailto:${mockData.personal.email}`} className="footer-email">
              {mockData.personal.email}
            </a>
          </div>
          
          <div className="footer-nav">
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/about" className="footer-link">About me</Link>
          </div>
          
          <div className="footer-social">
            <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={18} />
            </a>
            <a href={`mailto:${mockData.personal.email}`} className="social-icon">
              <Mail size={18} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;