import React, { useEffect, useState } from 'react';
import '../assets/style/Home.css';
import img from '../assets/webservices.jpg';
import img2 from '../assets/ecom.jpeg';
import img3 from '../assets/team.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdvancedServicesSection from './AdvancedServicesSection';
import EnterpriseEngineering from './EnterpriseEngineering';
import WorkProcess from './WorkProcess';
import OnDemandServices from './OnDemandServices';
import { Link } from 'react-router-dom';

function Home() {
  const infoContents = [
    {
      heading: "Think Smart.",
      subheading: "We solve real-world problems with smart tech.",
      text: "Our goal is to empower startups and businesses with reliable, custom-built digital solutions — tailored to your vision and budget.",
      image: img
    },
    {
      heading: "Innovate Better.",
      subheading: "Digital solutions that grow with you.",
      text: "We create scalable systems and software that support business evolution and rapid market demands.",
      image: img2
    },
    {
      heading: "Grow Confidently.",
      subheading: "Technology that moves your business forward.",
      text: "From ideation to launch, we deliver powerful tools that give you a competitive edge.",
      image: img3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Slider change with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % infoContents.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // AOS animations init
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Background animated circles
  useEffect(() => {
    const container = document.querySelector('.home');
    if (!container) return;

    const createCircle = () => {
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

    for (let i = 0; i < 20; i++) {
      createCircle();
    }

    const interval = setInterval(() => {
      createCircle();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Counter Animation
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
  
    const updateCounters = () => {
      counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const speed = 600; // Slow speed (higher = slower)
  
        const updateCount = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);
  
          if (current < target) {
            counter.innerText = `${Math.min(current + increment, target)}`;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
  
        updateCount();
      });
    };
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounters(); // Animate every time section enters view
          }
        });
      },
      {
        threshold: 0.5
      }
    );
  
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  
    return () => {
      observer.disconnect();
    };
  }, []);
  

  const currentItem = infoContents[currentIndex];

  return (
    <>
      <div className="home">
        <div className="container pt-5">
          <h1 className="d-flex justify-content-center mt-3 text_heading text_heading_h1 pb-3">
            Software Development Company
          </h1>
          <h3 className="d-flex justify-content-center text_heading pb-2">
            Most Trusted Custom IT Solutions Company
          </h3>
        </div>

        <div className="info-box container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-section" data-aos="fade-right">
              <div className={`slide-content ${fade ? 'fade-in' : 'fade-out'}`}>
                <h2 className="mb-3">{currentItem.heading}</h2>
                <h5 className="mb-3 text-dark">{currentItem.subheading}</h5>
                <p className="text-dark">{currentItem.text}</p>
                <Link to="/Contact" className="btn btn-primary mt-3">
                  Request Free Consultation
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left">
              <img
                src={currentItem.image}
                alt="Tech"
                className={`img-fluid slider-image ${fade ? 'fade-in' : 'fade-out'}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section py-5">
        <div className="container">
          <div className="row text-center text-white d-flex justify-center justify-content-center">
            {[
              { icon: 'fa-folder-open', count: 126, label: 'Projects' },
              { icon: 'fa-smile-beam', count: 63, label: 'Happy Clients' },
              { icon: 'fa-trophy', count: 18, label: 'Awards Wins' },
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-6 mb-4 stat_box_holder" data-aos="zoom-in" data-aos-delay={`${index * 200}`}>
                <div className="stat-box">
                  <i className={`fas ${item.icon} icon`}></i>
                  <h2 className="counter" data-target={item.count}>0</h2>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Sections */}
      <AdvancedServicesSection />
      <WorkProcess />
      <EnterpriseEngineering />
      <OnDemandServices />
    </>
  );
}

export default Home;
