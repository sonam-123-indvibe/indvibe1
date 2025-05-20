import React from 'react';
import {
  FaSync, FaTools, FaServer, FaProjectDiagram,
  FaCloudUploadAlt, FaClipboardCheck, FaCodeBranch
} from 'react-icons/fa';

import img from '../assets/DevOps.jpeg'
import { Link } from 'react-router-dom';

const devOpsServices = [
  {
    icon: <FaSync />,
    title: "CI/CD Pipeline Setup",
    desc: "Automate your software delivery process for faster and safer deployments.",
  },
  {
    icon: <FaTools />,
    title: "Infrastructure as Code (IaC)",
    desc: "Manage infrastructure with tools like Terraform, Ansible, and AWS CloudFormation.",
  },
  {
    icon: <FaServer />,
    title: "Cloud Infrastructure Management",
    desc: "Deploy and scale applications on AWS, Azure, or GCP with expert guidance.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Microservices & Containerization",
    desc: "Leverage Docker and Kubernetes to streamline your services and improve scalability.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Automated Deployment",
    desc: "Ensure zero-downtime releases with fully automated DevOps workflows.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Monitoring & Logging",
    desc: "Monitor systems in real-time using tools like Prometheus, Grafana, and ELK stack.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Version Control Integration",
    desc: "Seamlessly integrate Git, Bitbucket, and more to manage code efficiently.",
  },
];

const DevOpsServices = () => {
  return (

    <>
      <section className="uiux-hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="text-section">
                <h1>DevOps Services</h1>
                <p>
                DevOps software solutions from CIS help eliminate inefficiencies, increase reliability and quality, automate processes, and help optimize IT operations, workflows and software delivery.
                Unlock the full potential of blockchain with 100% guaranteed security, transparency, and scalability for your business. Get a free consultation with our blockchain software development company today and take the first step toward innovation!

                
                </p>
                <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
              </div>
              <div className="image-section">
                <img src={img} alt="UI UX Design Banner" width={"600px"}/>
              </div>
            </div>
          </div>
        </section>

    <section className="uiux-section">
      <div className="container">
        <h2 className="section-title">DevOps Services</h2>
        <p className="section-subtitle">
          At CIS, we provide efficient DevOps solutions for seamless development, continuous delivery, and continuous improvement.
        </p>

        <div className="grid-container">
          {devOpsServices.map((service, idx) => (
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

export default DevOpsServices;
