import React from 'react';
import './Body.css';
import { 
  FaMobileAlt, 
  FaLaptopCode, 
  FaServer, 
  FaRocket, 
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaCar,
  FaHandshake,
  FaCog,
  FaCode,
  FaDatabase,
  FaCloud,
  FaLock,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaAward,
  FaHeart,
  FaEye,
  FaPlay,
  FaCheck,
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa';

export default function Body() {
  const techIcons = {
    cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    reactnative: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    materialui: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  };

  const companies = [
    {
      name: "Shawave Technologies Pvt Ltd",
      role: "Founder & CEO",
      period: "2023 - Present",
      description: "Leading innovative technology solutions with a focus on digital transformation and cutting-edge software development.",
      achievements: [
        "Founded Shawave Technologies as a comprehensive technology solutions provider",
        "Established DriverSpot as a successful subsidiary focusing on transportation technology",
        "Built scalable tech infrastructure serving thousands of users across multiple platforms",
        "Led product development and market expansion strategies across diverse industries",
        "Managed strategic partnerships and technology vendor relationships"
      ],
      icon: <FaBuilding />,
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "DriverSpot",
      role: "Founder & CEO",
      period: "2023 - Present",
      description: "Revolutionary transportation technology platform connecting drivers with partners through innovative digital solutions.",
      achievements: [
        "Launched DriverSpot platform revolutionizing driver-partner connections",
        "Built scalable tech infrastructure serving thousands of users",
        "Established strategic partnerships across the transportation industry",
        "Led product development and market expansion strategies",
        "Implemented advanced analytics and tracking systems"
      ],
      icon: <FaCar />,
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  const projects = [
    {
      title: "DriverSpot Platform",
      company: "DriverSpot",
      description: "A comprehensive transportation platform connecting drivers with partners, featuring real-time tracking, payment processing, and analytics dashboard.",
      features: [
        "Real-time driver tracking and management system",
        "Advanced payment processing and financial analytics",
        "Comprehensive analytics dashboard with business insights",
        "Mobile-first responsive design for all devices",
        "Multi-platform compatibility and API integration"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Material-UI"],
      icon: <FaCar />,
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      status: "Live",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DriverSpot Partner Management",
      company: "DriverSpot",
      description: "Partner management system for DriverSpot platform, enabling businesses to manage driver partnerships, track performance, and optimize operations.",
      features: [
        "Partner onboarding and verification system",
        "Performance tracking and analytics dashboard",
        "Automated reporting and notification system",
        "Custom dashboard for business partners",
        "Seamless integration with main platform"
      ],
      technologies: ["React", "Angular", "Express.js", "PostgreSQL", "Redux"],
      icon: <FaHandshake />,
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      status: "Live",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Shawave Tech Solutions",
      company: "Shawave Technologies",
      description: "Enterprise technology solutions platform providing custom software development, cloud services, and digital transformation consulting.",
      features: [
        "Custom software development and consulting services",
        "Cloud infrastructure and DevOps management",
        "Digital transformation strategy and implementation",
        "API development and third-party integrations",
        "Scalable architecture design and optimization"
      ],
      technologies: ["React", "Python", "AWS", "Docker", "Kubernetes"],
      icon: <FaCog />,
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      status: "Live",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const freelanceServices = [
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Apps",
        "React Native",
        "Flutter Development",
        "App Store Optimization"
      ],
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      description: "Modern web applications built with the latest technologies and best practices.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Custom Web Portals"
      ],
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Full Stack Solutions",
      icon: <FaServer />,
      description: "End-to-end development services for complex business applications.",
      features: [
        "MERN Stack",
        "Cloud Solutions",
        "API Development",
        "Database Design"
      ],
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];


  return (
    <div className='body'>
      {/* Hero Stats Section */}
      <section className="hero-stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">
              <FaCode />
            </div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FaTrophy />
            </div>
            <div className="stat-number">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaAward />
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <div className="section-badge">Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Mastering the latest technologies to deliver exceptional solutions</p>
        </div>
        <div className='skills-grid'>
          {Object.entries(techIcons).map(([key, url], index) => (
            <div key={key} className='skill-item' style={{ '--index': index }}>
              <div className="skill-icon">
                <img src={url} alt={key} className='skill-image' />
              </div>
              <span className='skill-name'>{key}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-section">
        <div className="section-header">
          <div className="section-badge">Leadership</div>
          <h2 className="section-title">Companies I Lead</h2>
          <p className="section-subtitle">Entrepreneurial ventures driving innovation and growth</p>
        </div>
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-card" style={{ '--company-gradient': company.gradient }}>
              <div className="company-header">
                <div className="company-icon" style={{ background: company.gradient }}>
                  {company.icon}
                </div>
                <div className="company-badge">{company.role}</div>
              </div>
              <div className="company-content">
                <h3 className="company-name">{company.name}</h3>
                <div className="company-period">{company.period}</div>
                <p className="company-description">{company.description}</p>
                <div className="company-achievements">
                  <h4>Achievements</h4>
                  <ul>
                    {company.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <FaCheck />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <div className="section-badge">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Innovative solutions that transform businesses</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--project-gradient': project.gradient }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-status">{project.status}</div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-icon" style={{ background: project.gradient }}>
                    {project.icon}
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-company">{project.company}</div>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="project-technologies">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <button className="btn-primary">
                    <FaEye />
                    View Project
                  </button>
                  <button className="btn-secondary">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Freelance Services Section */}
      <section className="freelance-section">
        <div className="section-header">
          <div className="section-badge">Services</div>
          <h2 className="section-title">Freelance Services</h2>
          <p className="section-subtitle">Professional development services tailored to your needs</p>
        </div>
        <div className="freelance-grid">
          {freelanceServices.map((service, index) => (
            <div key={index} className="freelance-card" style={{ '--service-gradient': service.gradient }}>
              <div className="freelance-icon" style={{ background: service.gradient }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="freelance-features">
                <h4>Services Include</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-service">
                Get Started
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
} 