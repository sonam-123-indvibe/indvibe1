import React from 'react';
// import '../assets/style/ERPSection.css';
import ERPImage from '../assets/ERP.jpeg';
import { FaProjectDiagram, FaCogs, FaChartLine, FaUsers, FaWarehouse, FaMoneyCheckAlt, FaFileInvoice } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const erpServices = [
  {
    icon: <FaProjectDiagram />,
    title: "Custom ERP Development",
    desc: "Tailored ERP systems designed to fit your unique business processes and industry needs."
  },
  {
    icon: <FaCogs />,
    title: "ERP Integration Services",
    desc: "Seamlessly connect ERP with CRM, HRM, finance, and other critical tools to streamline workflows."
  },
  {
    icon: <FaChartLine />,
    title: "Business Process Automation",
    desc: "Automate routine tasks, minimize manual errors, and improve operational efficiency."
  },
  {
    icon: <FaUsers />,
    title: "HR & Payroll Management",
    desc: "Manage employee data, payroll, attendance, and more with dedicated HR modules."
  },
  {
    icon: <FaWarehouse />,
    title: "Inventory & Supply Chain",
    desc: "Track inventory levels, manage procurement, and ensure smooth supply chain operations."
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Finance & Accounting",
    desc: "Handle invoices, billing, budgeting, and compliance with our robust financial modules."
  },
  {
    icon: <FaFileInvoice />,
    title: "Reporting & Analytics",
    desc: "Get real-time insights with customizable dashboards and intelligent reporting tools."
  }
];

const ERPSection = () => {
  return (
    <>
      <section className="uiux-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1>Expert ERP System Development</h1>
              <p>Optimize Operations & Drive Growth with CIS’s Proven ERP Solutions</p>
              <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
            </div>
            <div className="image-section">
              <img src={ERPImage} alt="ERP System Banner" width={'600px'} />
            </div>
          </div>
        </div>
      </section>

      <section className="uiux-section">
        <div className="container">
          <h2 className="section-title">Empower Your Business with Scalable ERP Development Services</h2>
          <p className="section-subtitle">
            Boost productivity, minimize inefficiencies, and scale faster with end-to-end ERP software development from CIS. Whether you're a startup or an enterprise, we build ERP systems that evolve with your goals.
          </p>
          <div className="grid-container">
            {erpServices.map((service, idx) => (
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

export default ERPSection;
