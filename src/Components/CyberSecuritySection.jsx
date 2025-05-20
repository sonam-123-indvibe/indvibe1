import React from 'react';
// import '../assets/style/CyberSecuritySection.css';
import CyberImage from '../assets/cyber.jpeg';
import { FaShieldAlt, FaLock, FaBug, FaUserSecret, FaFingerprint, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const cyberServices = [
  {
    icon: <FaShieldAlt />,
    title: "Cyber Risk Assessment",
    desc: "Identify, analyze, and mitigate security risks across your IT infrastructure."
  },
  {
    icon: <FaLock />,
    title: "Data Protection & Encryption",
    desc: "Safeguard sensitive data with advanced encryption and data masking techniques."
  },
  {
    icon: <FaBug />,
    title: "Vulnerability Assessment & Penetration Testing",
    desc: "Detect and eliminate weaknesses through regular testing and simulations."
  },
  {
    icon: <FaUserSecret />,
    title: "Threat Intelligence & Monitoring",
    desc: "Stay ahead of attacks with real-time monitoring, SIEM, and behavior analytics."
  },
  {
    icon: <FaFingerprint />,
    title: "Identity & Access Management",
    desc: "Ensure only the right people have access to critical systems and data."
  },
  {
    icon: <FaKey />,
    title: "Compliance & Governance",
    desc: "Achieve regulatory compliance (GDPR, ISO 27001, HIPAA, etc.) with our expert guidance."
  }
];

const CyberSecuritySection = () => {
  return (
    <>
      <section className="uiux-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1>Advanced Cybersecurity Solutions</h1>
              <p>Protect Your Assets with Enterprise-Grade Security</p>
              <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
            </div>
            <div className="image-section">
              <img src={CyberImage} alt="Cybersecurity Banner" width={'600px'} />
            </div>
          </div>
        </div>
      </section>

      <section className="uiux-section">
        <div className="container">
          <h2 className="section-title">Protect Your Digital Landscape with Trusted Cybersecurity Services</h2>
          <p className="section-subtitle">
            Shield your applications, infrastructure, and sensitive data with our end-to-end cybersecurity services. We secure your digital world with proactive strategies, 24/7 monitoring, and full compliance support.
          </p>
          <div className="grid-container">
            {cyberServices.map((service, idx) => (
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

export default CyberSecuritySection;
