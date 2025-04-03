import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaWhatsapp } from 'react-icons/fa';
import './Header.css';
import profileImage from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Front end Developer', 'Freelancer', 'Mobile app Developer'],
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
      <div className="header-content">
        <div className="header-left">
          <div className="greeting">Hello, I'm</div>
          <h1 className="name">Sunanth Samala</h1>
          <div className="typewriter">
            <span>{text}</span>
            <Cursor cursorColor="#4facfe" />
          </div>
          <div className="role-title">Founder & CEO of DriverSpot</div>
          <p className="description">
            Passionate about creating beautiful and functional web applications. 
            Specialized in React, Angular, and modern web technologies. 
            Turning ideas into elegant digital solutions.
          </p>
          <div className="social-links">
            <a href="https://github.com/sunanth-developer" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sunanth-samala-818b2b169/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/918883770999" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp size={24} />
            </a>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload className="download-icon" />
            Download Resume
          </button>
        </div>
        <div className="header-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="Sunanth Samala" className="profile-image" />
            <div className="profile-image-overlay"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 