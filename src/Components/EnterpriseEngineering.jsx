import React from 'react';
import {
  FaAndroid, FaApple, FaReact, FaJava, FaNodeJs,
  FaPython, FaCloud, FaDatabase, FaAws,
  FaBootstrap,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaAngular
} from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { DiPhonegap } from "react-icons/di";
import '../assets/style/EnterpriseEngineering.css';

const techList = [
  { icon: <FaAndroid />, color: '#3DDC84' },
  { icon: <FaApple />, color: '#000' },
  { icon: <FaReact />, color: '#61DBFB' },
  { icon: <FaJava />, color: '#f89820' },
  { icon: <FaNodeJs />, color: '#3C873A' },
  { icon: <FaPython />, color: '#3776AB' },
  { icon: <FaCloud />, color: '#00BFFF' },
  { icon: <FaDatabase />, color: '#6c63ff' },
  { icon: <FaAws />, color: '#FF9900' },          // AWS Orange
  { icon: <FaBootstrap />, color: '#bf8fff' },    // Bootstrap Purple
  { icon: <FaVuejs />, color: '#42b883' },        // Vue Green
  { icon: <FaHtml5 />, color: '#E34F26' },        // HTML5 Orange
  { icon: <FaCss3Alt />, color: '#1572B6' },      // CSS3 Blue
  { icon: <FaAngular />, color: '#DD0031' },      // Angular Red
  { icon: <SiMongodb />, color: '#47A248' },      // MongoDB Green
  { icon: <FaFlutter />, color: '#4ca4ed' },      // Flutter Blue
  { icon: <TbBrandKotlin />, color: '#ad68f7' },  // Kotlin Purple
  { icon: <DiPhonegap />, color: '#e8d7fc' },
 
];
// <FaBootstrap /> <FaVuejs /> <FaHtml5 /> <FaCss3Alt />
const EnterpriseEngineering = () => {
  return (
    <section className="enterprise-section">
      <div className="container">
        <h2 className="section-title">Enterprise Product Engineering</h2>
        <p className="section-desc">
          Cutting-edge technologies to build scalable and intelligent products for enterprises.
        </p>

        <div className="icon-grid">
          {techList.map((tech, index) => (
            <div
              className="tech-icon-box"
              key={index}
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseEngineering;
