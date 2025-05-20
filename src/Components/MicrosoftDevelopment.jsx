import React from 'react';
import '../assets/style/Block.css'; // Use your CSS file
import { FaCloud, FaCogs, FaLaptopCode, FaDatabase, FaChartBar, FaRocket, FaLightbulb, FaProjectDiagram, FaNetworkWired, FaRobot, FaCodeBranch } from 'react-icons/fa';
import micro from "../assets/micro.jpg"
import { Link } from 'react-router-dom';
const microsoftServices = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Microsoft Application Development",
    desc: "Tailored software solutions using .NET, C#, and Azure. Build cross-platform apps with .NET MAUI, Blazor, and AI tools."
  },
  {
    icon: <FaCogs />,
    title: "Microsoft Power Platform Development",
    desc: "Build low-code solutions using Power Apps, Automate workflows with Power Automate, and visualize data via Power BI."
  },
  {
    icon: <FaChartBar />,
    title: "Microsoft 365 & SharePoint Development",
    desc: "Enhance collaboration with SharePoint portals, Teams integrations, and custom Microsoft 365 extensions."
  },
  {
    icon: <FaCloud />,
    title: "Azure Cloud Application Development",
    desc: "Develop scalable, cloud-native apps with Azure Functions, Kubernetes, and APIs. We also handle cloud migration."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Enterprise Software Development",
    desc: "ERP/CRM with Dynamics 365, BI dashboards, and legacy system modernization using Microsoft enterprise tools."
  },
  {
    icon: <FaDatabase />,
    title: ".NET Development Services",
    desc: "Build high-performance web and desktop apps with ASP.NET Core, WPF, WinForms, and .NET microservices."
  },
  {
    icon: <FaRobot />,
    title: "Microsoft AI & Machine Learning",
    desc: "Integrate Azure Bot Services, cognitive APIs, predictive analytics, and vision/speech/text AI features."
  },
  {
    icon: <FaCodeBranch />,
    title: "Microsoft DevOps & Lifecycle",
    desc: "Set up CI/CD pipelines with Azure DevOps, implement automated testing, and streamline agile delivery."
  },
  {
    icon: <FaNetworkWired />,
    title: "Microsoft IoT Solutions",
    desc: "Develop smart apps using Azure IoT Hub, edge computing, and real-time data for industries and automation."
  },
  {
    icon: <FaCloud />,
    title: "Migration & Integration Services",
    desc: "Migrate legacy systems to Azure, integrate with third-party apps, and manage cloud-based databases seamlessly."
  },
  {
    icon: <FaLightbulb />,
    title: "Copilot Integration & Customization",
    desc: "Integrate Microsoft Copilot to automate tasks, connect to internal data, and create custom plugins."
  },
  {
    icon: <FaRocket />,
    title: "Mixed Reality with HoloLens",
    desc: "Create immersive training, real-time collaboration, and smart maintenance with Microsoft HoloLens & MRTK."
  },
];

const MicrosoftDevelopment = () => {
  return (
    <>
      <section className="uiux-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1>Comprehensive Microsoft Development Services</h1>
              <p>From cloud to custom apps, we build Microsoft solutions that work as hard as you do!</p>
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
          <h2 className="section-title">Our Microsoft Development Offerings</h2>
          <p className="section-subtitle">
            Boost your digital transformation journey with our end-to-end Microsoft software development expertise.
          </p>
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

export default MicrosoftDevelopment;
