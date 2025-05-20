import React from 'react';
import {
  FaBullhorn, FaSearch, FaPalette, FaChartLine,
  FaAd, FaCommentsDollar, FaHandsHelping
} from 'react-icons/fa';

import brand from '../assets/Brand.webp'
import { Link } from 'react-router-dom';

const brandingServices = [
  {
    icon: <FaPalette />,
    title: "Brand Identity Design",
    desc: "Craft powerful logos, color schemes, and visuals to create a strong, consistent brand identity.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Rank higher on search engines with technical SEO, on-page optimization, and keyword strategies.",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media Marketing",
    desc: "Grow your audience and brand presence across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
  },
  {
    icon: <FaAd />,
    title: "Paid Ad Campaigns",
    desc: "Targeted Google Ads and social media campaigns to maximize ROI and reach your ideal audience.",
  },
  {
    icon: <FaChartLine />,
    title: "Content Marketing",
    desc: "Build trust and traffic with high-quality blogs, videos, infographics, and case studies.",
  },
  {
    icon: <FaCommentsDollar />,
    title: "Influencer Marketing",
    desc: "Collaborate with top influencers to build social proof and boost brand engagement.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Marketing Strategy Consulting",
    desc: "Get expert insights to shape a tailored branding and marketing roadmap for your business.",
  },
];

const BrandingMarketing = () => {
  return (

    <>
    
    
     <section className="uiux-hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="text-section">
                <h1>Top Branding and Marketing Company</h1>
                <p>
                Powerful Branding & Marketing, Now Within Reach with CISIN!
Strong branding and smart marketing can transform your business. Schedule a free consultation with our branding and marketing company today and let's craft a strategy that makes your brand stand out and thrive! </p>
    
                <p>
                Unlock the full potential of blockchain with 100% guaranteed security, transparency, and scalability for your business. Get a free consultation with our blockchain software development company today and take the first step toward innovation!
                </p>
                <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
              </div>
              <div className="image-section">
                <img src={brand} alt="UI UX Design Banner" width={"600px"}/>
              </div>
            </div>
          </div>
        </section>

        <section className="uiux-section">
      <div className="container">
        <h2 className="section-title">Branding & Marketing Services</h2>
        <p className="section-subtitle">
          Boost your business visibility, engage your audience, and build a powerful brand with our full-suite branding and digital marketing services.
        </p>

        <div className="grid-container">
          {brandingServices.map((service, idx) => (
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

export default BrandingMarketing;
