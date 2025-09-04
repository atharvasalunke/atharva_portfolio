import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../data/mock";
import { ArrowLeft, MapPin, GraduationCap, Award, Calendar, Building } from "lucide-react";

const About = () => {
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
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link active">About me</Link>
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

        <section className="about-page">

          <div className="about-content">
            <div className="about-intro">
              <div className="about-intro-content">
                <div className="about-intro-text">
                  <h2 className="page-title">About me</h2>
                  <div className="about-location">
                    <MapPin size={16} />
                    <span>{mockData.personal.location}</span>
                  </div>
                  <p className="about-hero-description">I'm a passionate Data and ML Engineer and proud Virginia Tech Hokie currently pursuing my Master's in Computer Engineering at Virginia Tech. With a strong background in machine learning, data engineering, and cloud platforms, I love solving complex problems and building systems that make a real impact.</p>
                  <p className="about-hero-description">My experience spans from optimizing LLM-based systems at Zof AI to designing real-time ETL pipelines at Citibank through LTIMindtree.</p>
                </div>
                <div className="about-intro-image">
                  <div className="about-photo-container">
                    <img 
                      src="about_me.jpeg" 
                      alt={mockData.personal.name}
                      className="about-hero-photo"
                    />
                  </div>
                </div>
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
              <h3 className="about-section-title">My work experience</h3>
              <div className="experience-list">
                {mockData.workExperience.map((experience, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h4 className="job-title">{experience.position}, {experience.company}</h4>
                      <div className="experience-meta">
                        <span className="experience-period">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="experience-responsibilities">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="responsibility-item">{responsibility}</li>
                      ))}
                    </ul>
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