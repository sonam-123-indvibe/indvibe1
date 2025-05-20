import React, { useEffect } from 'react';
import '../assets/style/Home.css';
import img from '../assets/webservices.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdvancedServicesSection from './AdvancedServicesSection';
import EnterpriseEngineering from './EnterpriseEngineering';
import WorkProcess from './WorkProcess';
import OnDemandServices from './OnDemandServices';
import { Link } from 'react-router-dom';

function Home() {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Floating circles animation logic
  useEffect(() => {
    const container = document.querySelector('.home');

    for (let i = 0; i < 20; i++) {
      createCircle(container);
    }

    const interval = setInterval(() => {
      createCircle(container);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const createCircle = (container) => {
    const circle = document.createElement('span');
    circle.classList.add('circle');

    const size = Math.random() * 80 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    circle.style.bottom = `${Math.random() * 80}px`;

    container.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 10000);
  };

  return (
    <>
    <div className="home ">
      <div className="container pt-5">
        <h1 className="d-flex justify-content-center mt-3 text_heading text_heading_h1 pb-3">
          Software Development Company
        </h1>
        <h3 className="d-flex justify-content-center text_heading pb-2">
          Most Trusted Custom IT Solutions Company
        </h3>
      </div>

      {/* Info Section */}
      <div className="info-box container py-5">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6 text-section" data-aos="fade-right">
            <h2 className="mb-3">Think Smart.</h2>
            <h5 className="mb-3 text-dark">We solve real-world problems with smart tech.</h5>
            <p className="text-dark">
              Our goal is to empower startups and businesses with reliable, custom-built digital
              solutions — tailored to your vision and budget.
            </p>
            <Link to={'/Contact'} className="btn btn-primary mt-3">Request Free Consultation</Link>
          </div>

          {/* Right Image */}
          <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left">
            <img src={img} alt="Tech Solutions" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
     
    </div>

    <div className="stats-section py-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in">
              <div className="stat-box">
                <i className="fas fa-folder-open icon"></i>
                <h2 className="counter">126</h2>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-box">
                <i className="fas fa-smile-beam icon"></i>
                <h2 className="counter">63</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="stat-box">
                <i className="fas fa-trophy icon"></i>
                <h2 className="counter">18</h2>
                <p>Awards Wins</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="600">
              <div className="stat-box">
                <i className="fas fa-globe icon"></i>
                <h2 className="counter">27</h2>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdvancedServicesSection/>
      <WorkProcess/>
      <EnterpriseEngineering/>
      <OnDemandServices/>
     
    </>
    
  );
}

export default Home;
