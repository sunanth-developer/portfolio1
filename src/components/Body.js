import React from 'react';
import './Body.css';
import { FaMobileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';

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
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  };

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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className='body'>
      <h2 className="maintext">Skills</h2>
      <div className='skillsbody'>
        {Object.entries(techIcons).map(([key, url], index) => (
          <div key={key} className='skill-item' style={{ '--index': index }}>
            <img src={url} alt={key} className='skillsimage' />
            <span className='skill-name'>{key}</span>
          </div>
        ))}
      </div>

      <div className="freelance-section">
        <h2 className="maintext">Freelance Services</h2>
        <div className="freelance-grid">
          {freelanceServices.map((service, index) => (
            <div key={index} className="freelance-card">
              <div className="freelance-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="freelance-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="maintext">Work Experience</h2>
        <div className='workexp'>
          <div className='workexpleft'>
            <h2>Logeuler <span>(August 2022- April 2023)</span></h2>
            <h3>Sr.Frontend Developer</h3>
            <ul>
              <li>I am responsible for managing the frontend aspects as part of my role.</li>
              <li>Implemented a seamless and intuitive website interface across multiple devices, resulting in a 30% increase in average session duration and a 15% boost in overall user engagement.</li>
              <li>Developed and implemented front-end framework using React.js, Material Ui and JavaScript to enhance user experience</li>
            </ul>
          </div>
          <div className='workexpright'>
            <h2>Technologies</h2>
            <div className='workskillsimg'>
              <img src={techIcons.html} alt="HTML" className='workskillsimage' />
              <img src={techIcons.css} alt="CSS" className='workskillsimage' />
              <img src={techIcons.js} alt="java script" className='workskillsimage' />
              <img src={techIcons.react} alt="react" className='workskillsimage' />
              <img src={techIcons.materialui} alt="material ui" className='workskillsimage' />
              <img src={techIcons.redux} alt="redux" className='workskillsimage' />
            </div>
          </div>
        </div>

        <div className='workexp'>
          <div className='workexpright'>
            <h2>Technologies</h2>
            <div className='workskillsimg'>
              <img src={techIcons.html} alt="HTML" className='workskillsimage' />
              <img src={techIcons.css} alt="CSS" className='workskillsimage' />
              <img src={techIcons.js} alt="java script" className='workskillsimage' />
              <img src={techIcons.react} alt="react" className='workskillsimage' />
              <img src={techIcons.materialui} alt="material ui" className='workskillsimage' />
              <img src={techIcons.redux} alt="redux" className='workskillsimage' />
            </div>
          </div>
          <div className='workexpleft'>
            <h2>Allied Technologies <span>(August 2021 - November 2021)</span></h2>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Successfully accomplished assigned responsibilities and met targets while working entirely remotely.</li>
              <li>I conveyed both technical and design needs to assess performance, reliability, and accessibility.</li>
              <li>Identified and resolved software issues, effectively addressing errors to minimize workflow interruptions and downtime.</li>
              <li>Collected and analyzed user feedback to enhance the software's capabilities and performance.</li>
              <li>Produced comprehensive technical documentation, facilitating the dissemination of knowledge, ideas, and solutions across the broader development team.</li>
              <li>Determined project scope and collaborated with the project management team to project milestones and timelines accurately.</li>
              <li>Evaluated data to propose and strategize the implementation of new systems or alterations to current ones</li>
            </ul>
          </div>
        </div>

        <div className='workexp'>
          <div className='workexpleft'>
            <h2>Amarpushp educational and welfare society <span>(March 2020- June 2020)</span></h2>
            <h3>Web developer intern</h3>
            <ul>
              <li>Orchestrated project and web strategic planning for the entire team.</li>
              <li>Developed reusable code for cost efficiency and future project use.</li>
              <li>Managed specific assignments delegated by senior developers.</li>
              <li>Engaged in pre-project analysis and technical evaluations to ensure user-friendly interface creation.</li>
              <li>Conducted research on emerging programming languages, frameworks, and technologies to stay current with industry trends.</li>
              <li>Utilized various testing tools, frameworks, content management systems, and collaborated with cross-functional teams for seamless project completion</li>
            </ul>
          </div>
          <div className='workexpright'>
            <h2>Technologies</h2>
            <div className='workskillsimg'>
              <img src={techIcons.html} alt="HTML" className='workskillsimage' />
              <img src={techIcons.css} alt="CSS" className='workskillsimage' />
              <img src={techIcons.js} alt="java script" className='workskillsimage' />
              <img src={techIcons.react} alt="react" className='workskillsimage' />
              <img src={techIcons.materialui} alt="material ui" className='workskillsimage' />
              <img src={techIcons.redux} alt="redux" className='workskillsimage' />
            </div>
          </div>
        </div>

        <div className='workexp'>
          <div className='workexpright'>
            <h2>Technologies</h2>
            <div className='workskillsimg'>
              <img src={techIcons.html} alt="HTML" className='workskillsimage' />
              <img src={techIcons.css} alt="CSS" className='workskillsimage' />
              <img src={techIcons.js} alt="java script" className='workskillsimage' />
              <img src={techIcons.react} alt="react" className='workskillsimage' />
              <img src={techIcons.materialui} alt="material ui" className='workskillsimage' />
              <img src={techIcons.redux} alt="redux" className='workskillsimage' />
            </div>
          </div>
          <div className='workexpleft'>
            <h2>Inktop private LTD <span>(Jan 2019- March 2019)</span></h2>
            <h3>Mobile App Developer Intern</h3>
            <ul>
              <li>Conducted in-depth analyses to ascertain the feasibility and prerequisites for application development.</li>
              <li>Enhanced user experiences by conducting targeted research and consistently innovating in app programming and development.</li>
              <li>Fostered client loyalty by crafting innovative and intuitive technologies tailored to specific application needs.</li>
            </ul>
          </div>
        </div>

        <div className='workexp'>
          <div className='workexpleft'>
            <h2>Amarpushp educational and welfare society <span>(Jan 2018- Feb2018)</span></h2>
            <h3>Web Developer Intern</h3>
            <ul>
              <li>Devoted time to personal growth by attending regular training sessions to expand web development skills.</li>
              <li>Crafted and developed blog post sites using HTML.</li>
              <li>Developed responsive design layouts using JavaScript and JQuery, enhancing user experiences.</li>
              <li>Maintained clear communication with web development teams, ensuring comprehension of daily tasks and precise completion.</li>
              <li>Engaged in pre-project analysis and technical assessments to validate the creation of user-friendly interfaces.</li>
            </ul>
          </div>
          <div className='workexpright'>
            <h2>Technologies</h2>
            <div className='workskillsimg'>
              <img src={techIcons.html} alt="HTML" className='workskillsimage' />
              <img src={techIcons.css} alt="CSS" className='workskillsimage' />
              <img src={techIcons.js} alt="java script" className='workskillsimage' />
              <img src={techIcons.react} alt="react" className='workskillsimage' />
              <img src={techIcons.materialui} alt="material ui" className='workskillsimage' />
              <img src={techIcons.redux} alt="redux" className='workskillsimage' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='maintext'>Projects</h2>
        <div className='projects'>
          <div className='project'>
            <div className='projectstext'>
              <h2>Blog App</h2>
              <h4>This web application leverages React.js and SQL, enabling users to Publish, edit and delete blogs and has an user authentication with JWT token and cookies.</h4>
            </div>
            <div className='projectimages'>
              <img src={techIcons.html} alt="HTML" className='projectkillsimage' />
              <img src={techIcons.css} alt="CSS" className='projectkillsimage' />
              <img src={techIcons.js} alt="java script" className='projectkillsimage' />
              <img src={techIcons.react} alt="react" className='projectkillsimage' />
              <img src={techIcons.sql} alt="SQL" className='projectkillsimage' />
            </div>
          </div>

          <div className='project'>
            <div className='projectstext'>
              <h2>Messaging app</h2>
              <h4>This web application leverages React.js and Firebase, enabling users to create groups, engage in chat conversations, and utilize Gmail login for user validation.</h4>
            </div>
            <div className='projectimages'>
              <img src={techIcons.html} alt="HTML" className='projectkillsimage' />
              <img src={techIcons.css} alt="CSS" className='projectkillsimage' />
              <img src={techIcons.js} alt="java script" className='projectkillsimage' />
              <img src={techIcons.react} alt="react" className='projectkillsimage' />
              <img src={techIcons.firebase} alt="firebase" className='projectkillsimage' />
            </div>
          </div>

          <div className='project'>
            <div className='projectstext'>
              <h2>Music Player</h2>
              <h4>This music player is crafted using React.js and Firebase, utilizing the Spotify APK to access music files. It provides users with a display of all MP3 files sourced directly from the original Spotify developers' APK.</h4>
            </div>
            <div className='projectimages'>
              <img src={techIcons.html} alt="HTML" className='projectkillsimage' />
              <img src={techIcons.css} alt="CSS" className='projectkillsimage' />
              <img src={techIcons.js} alt="java script" className='projectkillsimage' />
              <img src={techIcons.react} alt="react" className='projectkillsimage' />
              <img src={techIcons.firebase} alt="firebase" className='projectkillsimage' />
            </div>
          </div>

          <div className='project'>
            <div className='projectstext'>
              <h2>Amazon Clone</h2>
              <h4>This Amazon clone replicates the functionalities of the Amazon website. It's built using React.js, JavaScript, Firebase, and utilizes Google APK for Gmail validation, allowing users to experience an interface akin to Amazon's platform.</h4>
            </div>
            <div className='projectimages'>
              <img src={techIcons.html} alt="HTML" className='projectkillsimage' />
              <img src={techIcons.css} alt="CSS" className='projectkillsimage' />
              <img src={techIcons.js} alt="java script" className='projectkillsimage' />
              <img src={techIcons.react} alt="react" className='projectkillsimage' />
              <img src={techIcons.firebase} alt="firebase" className='projectkillsimage' />
            </div>
          </div>

          <div className='project'>
            <div className='projectstext'>
              <h2>Food blog</h2>
              <h4>This website provides a collection of recipes for various dishes and is developed using HTML, CSS, JavaScript, and Bootstrap to offer an engaging and visually appealing platform for exploring different culinary options.</h4>
            </div>
            <div className='projectimages'>
              <img src={techIcons.html} alt="HTML" className='projectkillsimage' />
              <img src={techIcons.css} alt="CSS" className='projectkillsimage' />
              <img src={techIcons.js} alt="java script" className='projectkillsimage' />
              <img src={techIcons.react} alt="react" className='projectkillsimage' />
              <img src={techIcons.firebase} alt="firebase" className='projectkillsimage' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 