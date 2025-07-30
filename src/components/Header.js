import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaDownload, FaWhatsapp, FaRocket, FaBuilding } from 'react-icons/fa';
import './Header.css';
import profileImage from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Founder & CEO of Shawave Technologies', 'Leading DriverSpot Subsidiary', 'Full Stack Developer', 'Innovation Architect'],
    loop: true,
    delaySpeed: 2000,
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      {/* Enhanced Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="header-content">
        <div className="header-left">
          <div className="greeting-container">
            <div className="greeting">Hello, I'm</div>
            <div className="greeting-line"></div>
          </div>
          
          <h1 className="name">
            <span className="name-text">Sunanth Samala</span>
            <div className="name-glow"></div>
          </h1>
          
          <div className="role-container">
            <div className="role-badge">
              <FaRocket className="role-icon" />
              <span>Founder & CEO</span>
            </div>
            <div className="company-badge">
              <FaBuilding className="company-icon" />
              <span>Shawave Technologies</span>
            </div>
          </div>

          <div className="typewriter-container">
            <div className="typewriter">
              <span>{text}</span>
              <Cursor cursorColor="#00d4ff" />
            </div>
          </div>

          <p className="description">
            Visionary entrepreneur and technologist leading Shawave Technologies with its innovative subsidiary DriverSpot. 
            Creating cutting-edge solutions that transform industries and drive digital innovation.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Years</div>
            </div>
          </div>

          <div className="action-buttons">
           
            
            <div className="social-links">
              <a href="https://github.com/sunanth-developer" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={20} />
                <div className="social-glow"></div>
              </a>
              <a href="https://www.linkedin.com/in/sunanth-samala-818b2b169/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={20} />
                <div className="social-glow"></div>
              </a>
              <a href="https://wa.me/918883770999" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp size={20} />
                <div className="social-glow"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img src={profileImage} alt="Sunanth Samala" className="profile-image" />
              <div className="profile-overlay"></div>
              <div className="profile-border"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 