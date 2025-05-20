import React from 'react';
import '../assets/style/Block.css'; // Use your CSS file
import { MdMobileFriendly, MdAppShortcut } from 'react-icons/md';
import { RiCodeBoxLine } from 'react-icons/ri';
import {  SiApachekafka, SiApachespark } from 'react-icons/si';
import { TbDeviceMobileCode } from 'react-icons/tb';
import micro from "../assets/app.png"
import { Link } from 'react-router-dom';
const microsoftServices = [
    {
        icon: <MdMobileFriendly />, // Mobile strategy
        title: "Mobile App Consultation & Strategy",
        desc: "Not sure where to start? As a trusted mobile application development company, we help you plan and execute a winning app strategy."
      },
      {
        icon: <RiCodeBoxLine />, // Custom development
        title: "Custom Mobile App Development",
        desc: "Need a unique app for your business? Our custom mobile app development services are designed to fit your exact needs."
      },
     
      {
        icon: <MdAppShortcut />, 
        title: "Native App Development",
        desc: "Want the best experience for iPhone and Android users? Our mobile app development service delivers top-quality native apps."
      },
      {
        icon: <SiApachekafka />, // Enterprise feel
        title: "Enterprise Software Development",
        desc: "ERP/CRM with Dynamics 365, BI dashboards, and legacy system modernization using Microsoft enterprise tools."
      },
      {
        icon: <TbDeviceMobileCode />, // Cross-platform
        title: "Cross-Platform App Development",
        desc: "Reach more users with one app. Our mobile application development services build apps that work across multiple platforms."
      },
      {
        icon: <SiApachespark />, // Integration & AI
        title: "App Integration & API Services",
        desc: "Integrate Azure Bot Services, cognitive APIs, predictive analytics, and vision/speech/text AI features."
      }
      
]
const Mobile = () => {
  return (
    <>
      <section className="uiux-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1>Innovative Mobile App Development Company</h1>
              <p>Turn a vision into a powerful mobile application that captivates users and drives business success through innovation, technology, and user-centric design.</p>
              <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
            </div>
            <div className="image-section">
              <img src={micro} alt="Microsoft Services Banner" />
            </div>
          </div>
        </div>
      </section>

      <section className="uiux-section">
        <div className="container">
          <h2 className="section-title">Your One-Stop Solution for High-Quality Mobile App Development Services</h2>
          <p className="section-subtitle">
          In a world where everything is just a tap away, your business needs a mobile app that stands out. At CISIN, with our mobile application development services we create fast, user-friendly, and feature-packed apps that not only look great but also deliver a seamless experience. Whether you're launching a new idea or upgrading an existing app, we've got you covered!  </p>
          <div className="grid-container">
            {microsoftServices.map((service, idx) => (
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

export default Mobile;
