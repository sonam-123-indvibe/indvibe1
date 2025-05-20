import React from 'react';
import {
  FaMicrochip, FaSatelliteDish, FaPlug, FaNetworkWired,
  FaCodeBranch, FaConnectdevelop, FaCogs
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UIUXImage from '../assets/costom.webp'

const iotAndApiServices = [
  // IoT Services
  {
    icon: <FaMicrochip />,
    title: "IoT App Development",
    desc: "Build scalable IoT apps that connect devices and gather real-time data from sensors and hardware.",
    type: "IoT"
  },
  {
    icon: <FaSatelliteDish />,
    title: "IoT Device Integration",
    desc: "Seamlessly connect and manage smart devices, sensors, and machines using secure protocols.",
    type: "IoT"
  },
  {
    icon: <FaPlug />,
    title: "Smart Home & Industrial Automation",
    desc: "Develop custom solutions for smart homes, factories, and enterprise automation.",
    type: "IoT"
  },
  {
    icon: <FaNetworkWired />,
    title: "IoT Cloud & Network Solutions",
    desc: "Enable real-time data sync and analytics through cloud-connected IoT infrastructure.",
    type: "IoT"
  },

  // API Services
  {
    icon: <FaCodeBranch />,
    title: "Custom API Development",
    desc: "Develop secure, scalable APIs for web, mobile, and third-party services.",
    type: "API"
  },
  {
    icon: <FaConnectdevelop />,
    title: "Third-Party API Integration",
    desc: "Integrate payment gateways, social logins, and cloud services into your apps.",
    type: "API"
  },
  {
    icon: <FaCogs />,
    title: "API Management & Testing",
    desc: "Ensure performance, security, and reliability through thorough API testing and monitoring.",
    type: "API"
  },
  {
    icon: <FaNetworkWired />,
    title: "Microservices & API Gateways",
    desc: "Structure your backend with microservices and API gateways for better modularity and scalability.",
    type: "API"
  },
];

const IoT = () => {
  return (
    <>
     <section className="uiux-hero-section">
    <div className="container">
      <div className="hero-content">
        <div className="text-section">
          <h1>IOT Development Company</h1>
          <p>
          Custom Blockchain Development Services for a Decentralized Future
          </p>

          <p>
          IOT App Development Company Providing IOT App Development Services to Global Startups and IOT Development Companies
          </p>
          <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
        </div>
        <div className="image-section">
          <img src={UIUXImage} alt="UI UX Design Banner" />
        </div>
      </div>
    </div>
  </section>
    <section className="uiux-section">
      <div className="container">
        <h2 className="section-title">IoT & API Development Services</h2>
        <p className="section-subtitle">
          Build smart, connected systems and seamless digital integrations with our end-to-end IoT and API development services.
        </p>

        {/* IoT Section */}
        <h3 className="subheading">Internet of Things (IoT)</h3>
        <div className="grid-container">
          {iotAndApiServices.filter(service => service.type === "IoT").map((service, idx) => (
            <div className="uiux-card" key={idx}>
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* API Section */}
        <h3 className="subheading">API Development & Integration</h3>
        <div className="grid-container">
          {iotAndApiServices.filter(service => service.type === "API").map((service, idx) => (
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

export default IoT;
