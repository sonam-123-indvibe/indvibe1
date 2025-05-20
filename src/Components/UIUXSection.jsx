import React from 'react';
import '../assets/style/UIUXSection.css';
import UIUXImage from '../assets/UIbanner.webp'
import {
  FaUserAlt,
  FaSitemap,
  FaPaintBrush,
  FaMagic,
  FaDraftingCompass,
  FaMobileAlt,
  FaUniversalAccess,
  FaPenFancy,
  FaPalette,
  FaCode,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaUserAlt />, title: "User Research & Persona Development", desc: "Unlock invaluable insights with user research and persona development services." },
  { icon: <FaSitemap />, title: "Information Architecture & Wireframing", desc: "Create intuitive sitemaps and wireframes for seamless navigation and user flow." },
  { icon: <FaPaintBrush />, title: "Visual UI Design", desc: "Craft visually captivating experiences using advanced tools and creativity." },
  { icon: <FaMagic />, title: "Interaction & Micro-interaction Design", desc: "Enhance usability with dynamic animations and seamless feedback loops." },
  { icon: <FaDraftingCompass />, title: "Prototyping & Usability Testing", desc: "Refine designs using high-fidelity mockups and user testing for better UX." },
  { icon: <FaMobileAlt />, title: "Responsive & Mobile Design", desc: "Deliver pixel-perfect mobile experiences across all screen sizes." },
  { icon: <FaUniversalAccess />, title: "Accessibility & Inclusive Design", desc: "Ensure universal usability through ADA-compliant, accessible designs." },
  { icon: <FaPenFancy />, title: "UX Writing & Content Strategy", desc: "Craft compelling content that improves user flow and enhances UX." },
  { icon: <FaPalette />, title: "Design Systems & Style Guides", desc: "Maintain consistency with scalable design systems and UI kits." },
  { icon: <FaCode />, title: "Front-End Collaboration & Handoff", desc: "Streamline implementation with meticulous design-to-dev handoff." },
];

const UIUXSection = () => {
  return (
    <>
     <section className="uiux-hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="text-section">
            <h1>The Ultimate UI UX Design Company</h1>
            <p>
              Our UI UX design agency turns every swipe into a story and every click into a conversation.
              Welcome to design that captivates.
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
        <h2 className="section-title">UI/UX Development Solutions</h2>
        <p className="section-subtitle">
          We turn every click into a conversation and every swipe into a story.
        </p>
        <div className="grid-container">
          {services.map((service, idx) => (
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

export default UIUXSection;
