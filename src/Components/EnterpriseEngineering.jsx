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
  { icon: <FaAndroid />,title:"Android" ,color: '#3DDC84' },
  { icon: <FaApple />,title:"Apple" ,color: '#000' },
  { icon: <FaReact />,title:"React" ,color: '#61DBFB' },
  { icon: <FaJava />,title:"Java" ,color: '#f89820' },
  { icon: <FaNodeJs />,title:"Node" ,color: '#3C873A' },
  { icon: <FaPython />,title:"Python" ,color: '#3776AB' },
  { icon: <FaCloud />,title:"Cloud" ,color: '#00BFFF' },
  { icon: <FaDatabase />,title:"Data Base" ,color: '#6c63ff' },
  { icon: <FaAws />,title:"AWS" ,color: '#FF9900' },          // AWS Orange
  { icon: <FaBootstrap />,title:"Bootstrap" ,color: '#bf8fff' },    // Bootstrap Purple
  { icon: <FaVuejs />,title:"Vue" ,color: '#42b883' },        // Vue Green
  { icon: <FaHtml5 />,title:"HTML" ,color: '#E34F26' },        // HTML5 Orange
  { icon: <FaCss3Alt />,title:"CSS" ,color: '#1572B6' },      // CSS3 Blue
  { icon: <FaAngular />,title:"Angular" ,color: '#DD0031' },      // Angular Red
  { icon: <SiMongodb />,title:"MongoDB" ,color: '#47A248' },      // MongoDB Green
  { icon: <FaFlutter />,title:"Flutter" ,color: '#4ca4ed' },      // Flutter Blue
  { icon: <TbBrandKotlin />,title:"Kotlin" ,color: '#ad68f7' },  // Kotlin Purple
  { icon: <DiPhonegap />,title:"Phonegap" ,color: '#e8d7fc' },
 
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
            <>
            <div
              className="tech-icon-box d-block"
              key={index}
              style={{ color: tech.color }}
            >
              {tech.icon}
              <p className='small_font' >{tech.title}</p>
            </div>
             
             </>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default EnterpriseEngineering;
