import React from 'react';
import '../assets/style/Services.css';
import { FaBrain, FaCube, FaVrCardboard, FaNetworkWired, FaRobot, FaLaptopCode, FaBullhorn, FaServer, FaMicrosoft, FaPalette, FaGamepad, FaMobileAlt, FaCloud, FaDatabase, FaCogs, FaCloudUploadAlt, FaTools, FaUserShield, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaBrain />, title: "Artificial Intelligence", desc: "We use data-driven algorithms, machine learning, and neural networks.", link: "/AI"},
  { icon: <FaCube />, title: "Blockchain Development", desc: "Secure and transparent decentralized applications using smart contracts." ,link: "/Block"},
  { icon: <FaVrCardboard />, title: "AR & VR", desc: "Create immersive environments with 3D graphics and simulations.",link: "/Ar" },
  { icon: <FaNetworkWired />, title: "IoT & APIs", desc: "Enable seamless data communication and smart connectivity.",link:"/IoT" },
  // { icon: <FaRobot />, title: "RPA", desc: "Automate tasks using bots to boost workflow efficiency.",  },
  { icon: <FaLaptopCode />, title: "Web Development", desc: "Build fast, responsive, and secure websites." ,link:'/Web'},
  { icon: <FaBullhorn />, title: "Branding & Marketing", desc: "Captivate audiences and boost brand recognition." ,link:'/Brand'},
  { icon: <FaServer />, title: "DevOps Services", desc: "Continuous integration, delivery, and efficiency.", link:"/DevOps"},
  { icon: <FaMicrosoft />, title: "Microsoft Solutions", desc: "Innovative business tools for scale and success." , link:"Micro"},
  { icon: <FaPalette />, title: "UI/UX Design", desc: "Beautiful, user-centric digital experiences." ,link: "/UIUX" },
  // { icon: <FaGamepad />, title: "Game Development", desc: "Exciting games with powerful performance." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Modern apps with intuitive design and great performance.",link:"/mob" },
  // { icon: <FaCloud />, title: "Cloud Integration", desc: "Scalable and reliable cloud computing services.",link:"/Clod" },
  { icon: <FaTools />, title: "Custom Software", desc: "Tailored development to meet your business needs." ,link:"/Costom"},
  { icon: <FaUserShield />, title: "Cybersecurity", desc: "Protect your assets with our secure solutions." ,link:"/cyber"},
  { icon: <FaChartLine />, title: "ERP Systems", desc: "Boost efficiency with ERP integrations.", link:"/ERP" },
];

function AdvancedServicesSection() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Custom Software Development Services</h2>
          <p className="section-subtitle">
            We empower businesses to scale and transform through adaptable web and mobile solutions.
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="service-card h-100">
                <div className="icon-box">{service.icon}</div>
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
                <Link to={service.link} className="know-more">
                  Know More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedServicesSection;
