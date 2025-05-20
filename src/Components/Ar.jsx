import React from 'react';
import '../assets/style/Block.css';
import UIUXImage from '../assets/Ar.jpeg'
// import { FaCloud, FaRobot, FaBrain, FaCode, FaServer, FaCogs, FaDatabase, FaProjectDiagram, FaFlask, FaLanguage, FaStream } from 'react-icons/fa';
// import { SiScikitlearn, SiKeras, SiXgboost, SiPytorch, SiTensorflow, SiSpacy, SiOpencv, SiYolov5, SiApacheairflow, SiApachekafka, SiApacheflink, SiMlflow, SiGooglecloud,  } from 'react-icons/si';
import { FaVrCardboard, FaGlasses, FaCube, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const arvrServices = [
    {
      icon: <FaVrCardboard />,
      title: "AR/VR App Development",
      desc: "Build immersive Augmented and Virtual Reality apps for next-level user interaction and engagement."
    },
    {
      icon: <FaGlasses />,
      title: "AR Experience Design",
      desc: "Create interactive AR experiences for marketing, retail, education, and training."
    },
    {
      icon: <FaCube />,
      title: "3D Modeling & Simulation",
      desc: "Deliver high-quality 3D environments and simulations for realistic virtual experiences."
    },
    {
      icon: <FaCogs />,
      title: "AR/VR Integration Services",
      desc: "Seamlessly integrate AR/VR with your mobile apps, websites, or enterprise systems."
    },
  ];
  


const Ar = () => {
  return (
    <>
     <section className="uiux-hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Leading Immersive AR/VR Development Company</h1>
            <p>
            Custom Immersive AR/VR Development Services for a Decentralized Future
            </p>

           
            <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
          </div>
          <div className="image-section">
            <img src={UIUXImage} alt="UI UX Design Banner" width={"600px"} />
          </div>
        </div>
      </div>
    </section>

    <section className="uiux-section">
  <div className="container">
    <h2 className="section-title">Immersive AR/VR Development Services</h2>
    <p className="section-subtitle">
      Step into the future with interactive and immersive solutions. From retail to real estate, our AR/VR services are designed to revolutionize user engagement.
    </p>
    <div className="grid-container">
      {arvrServices.map((service, idx) => (
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

export default Ar;
