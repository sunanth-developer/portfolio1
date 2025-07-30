import React from 'react';
import './Footer.css';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaRocket,
  FaCode
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="footer-main-content">
          <div className="footer-main-section">
            <div className="footer-section-header">
              <FaRocket className="footer-section-icon" />
              <h3>Get In Touch</h3>
            </div>
            <p className="footer-section-description">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <FaEnvelope className="footer-contact-icon" />
                </div>
                <div className="footer-contact-details">
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:sunanth.samala1999@gmail.com">sunanth.samala1999@gmail.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <FaPhone className="footer-contact-icon" />
                </div>
                <div className="footer-contact-details">
                  <span className="footer-contact-label">Phone</span>
                  <a href="tel:+919959019781">+91 99590 19781</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <FaWhatsapp className="footer-contact-icon" />
                </div>
                <div className="footer-contact-details">
                  <span className="footer-contact-label">WhatsApp</span>
                  <a href="https://wa.me/918883770999" target="_blank" rel="noopener noreferrer">+91 88837 70999</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-main-section">
            <div className="footer-section-header">
              <FaCode className="footer-section-icon" />
              <h3>Connect With Me</h3>
            </div>
            <p className="footer-section-description">
              Follow me on social media to stay updated with my latest projects and insights.
            </p>
            <div className="footer-social-links">
              <a href="https://github.com/sunanth-developer" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaGithub className="footer-social-icon" />
                <span className="footer-social-label">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sunanth-samala-818b2b169/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin className="footer-social-icon" />
                <span className="footer-social-label">LinkedIn</span>
              </a>
              <a href="https://wa.me/919959019781" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaWhatsapp className="footer-social-icon" />
                <span className="footer-social-label">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-main-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Sunanth Samala. All rights reserved.</p>
            <p className="footer-made-with">
              Made with <FaHeart className="footer-heart" /> by Sunanth Samala
            </p>
          </div>
          <button className="footer-scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
} 