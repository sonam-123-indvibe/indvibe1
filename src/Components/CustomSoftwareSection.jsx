import React from 'react';
// import '../assets/style/CustomSoftwareSection.css';
import CustomImage from '../assets/webservices.jpg';
import { FaCogs, FaProjectDiagram, FaShieldAlt, FaRocket, FaUserCog, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const customServices = [
  {
    icon: <FaLaptopCode />,
    title: "Tailored Web & Desktop Apps",
    desc: "Custom applications designed specifically for your business workflows and goals."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Enterprise Software Development",
    desc: "ERP, CRM, HRMS & other scalable enterprise-grade software solutions."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Architecture & Compliance",
    desc: "We prioritize security, scalability, and regulatory compliance from day one."
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Boost speed and efficiency through optimized backend and frontend systems."
  },
  {
    icon: <FaUserCog />,
    title: "User-Centered Design",
    desc: "Beautifully crafted UI/UX that enhances productivity and experience."
  },
  {
    icon: <FaCogs />,
    title: "Third-Party Integration",
    desc: "We connect your app with APIs, databases, and legacy systems seamlessly."
  },
];

const CustomSoftwareSection = () => {
  return (
    <>
      <section className="uiux-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1>Expert Custom Software Development Company</h1>
              <p>Tailored Solutions to Match Your Business Needs</p>
              <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
            </div>
            <div className="image-section">
              <img src={CustomImage} alt="Custom Software Banner" />
            </div>
          </div>
        </div>
      </section>

      <section className="uiux-section">
        <div className="container">
          <h2 className="section-title">We Build Custom Software to Solve Complex Business Problems</h2>
          <p className="section-subtitle">
            Whether you need a web app, ERP solution, or secure enterprise system, we design and develop custom software that fits perfectly. Discuss your idea with our experts — free of charge.
          </p>
          <div className="grid-container">
            {customServices.map((service, idx) => (
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

export default CustomSoftwareSection;
