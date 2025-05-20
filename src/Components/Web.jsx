import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaMobileAlt, FaLaptopCode, FaLock
} from 'react-icons/fa';

import img from '../assets/wd.jpeg'
import { Link } from 'react-router-dom';

const webServices = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Web Development",
    desc: "Fully tailored, business-specific websites with high performance and scalability.",
  },
  {
    icon: <FaHtml5 />,
    title: "Frontend Development",
    desc: "Pixel-perfect UI using HTML5, CSS3, JavaScript, React, and other modern frameworks.",
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
    desc: "Robust server-side logic with Node.js, Express, and secure RESTful APIs.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    desc: "Integrate and manage powerful databases like MongoDB, MySQL, or PostgreSQL.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Websites optimized for every device — mobile, tablet, and desktop.",
  },
  {
    icon: <FaLock />,
    title: "Web Security & SEO",
    desc: "Secure coding, HTTPS, and SEO best practices for visibility and safety.",
  },
];

const Web = () => {
  return (

    <>
     <section className="uiux-hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Leading Web
            Development Company</h1>
            <p>
            Your dream website, engineered to perfection. From bespoke websites to lightning-fast web apps, with our web development services, we craft web solutions that drive engagement, efficiency, and exponential growth.
            </p>

            <p>
            Unlock the full potential of blockchain with 100% guaranteed security, transparency, and scalability for your business. Get a free consultation with our blockchain software development company today and take the first step toward innovation!
            </p>
            <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
          </div>
          <div className="image-section">
            <img src={img} alt="UI UX Design Banner" width={"600px"}/>
          </div>
        </div>
      </div>
    </section>

    <section className="uiux-section">
      <div className="container">
        <h2 className="section-title">Web Development Services</h2>
        <p className="section-subtitle">
          Build fast, responsive, and secure websites that drive engagement and conversions. From custom web apps to mobile-optimized sites, we craft digital solutions tailored to your brand.
        </p>

        <div className="grid-container">
          {webServices.map((service, idx) => (
            <div className="uiux-card" key={idx}>
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
    
  );
};

export default Web;
