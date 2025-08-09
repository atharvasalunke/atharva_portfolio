import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";
import { ArrowLeft, MapPin, GraduationCap, Award } from "lucide-react";

const About = () => {
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
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link active">About me</Link>
            <a href={`mailto:${mockData.personal.email}`} className="nav-link email-link">
              {mockData.personal.email}
            </a>
          </nav>
        </header>

        <section className="about-page">
          <div className="page-header">
            <h2 className="page-title">About me</h2>
            <div className="about-location">
              <MapPin size={16} />
              <span>{mockData.personal.location}</span>
            </div>
          </div>

          <div className="about-content">
            <div className="about-main">
              <div className="about-photo-section">
                <div className="profile-photo">
                  <div className="photo-placeholder">
                    <span className="photo-icon">👨‍💻</span>
                  </div>
                  <div className="photo-info">
                    <h3>{mockData.personal.name}</h3>
                    <p>{mockData.personal.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="about-story">
                <p className="about-description">{mockData.personal.aboutDescription}</p>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <GraduationCap size={20} />
                Education
              </h3>
              <div className="education-item">
                <h4>{mockData.education.degree}</h4>
                <p className="education-school">{mockData.education.school}</p>
                <p className="education-period">{mockData.education.period}</p>
                <p className="education-gpa">GPA: {mockData.education.gpa}</p>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">
                <Award size={20} />
                Certifications
              </h3>
              <div className="certifications-list">
                {mockData.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="certification-name">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section-title">Technical Skills</h3>
              <div className="skills-grid">
                {Object.entries(mockData.skills).map(([category, skills]) => (
                  <div key={category} className="skill-category">
                    <h4 className="skill-category-title">{category}</h4>
                    <p className="skill-list">{skills.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;