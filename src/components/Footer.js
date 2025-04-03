import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-main-content">
        <div className="footer-main-section">
          <h3>Contact Me</h3>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <MdEmail className="footer-contact-icon" />
              <a href="mailto:sunanth.samala1999@gmail.com">sunanth.samala1999@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <BsTelephone className="footer-contact-icon" />
              <a href="tel:+918883770999">+91 88837 70999</a>
            </div>
          </div>
        </div>

        <div className="footer-main-section">
          <h3>Follow Me</h3>
          <div className="footer-social-links">
            <a href="https://github.com/sunanth-developer" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaGithub className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/sunanth-samala-818b2b169/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a href="https://wa.me/918883770999" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaWhatsapp className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main-bottom">
        <p>&copy; {new Date().getFullYear()} Sunanth Samala. All rights reserved.</p>
      </div>
    </footer>
  );
} 