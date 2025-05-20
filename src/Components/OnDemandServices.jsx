import React, { useState } from 'react';
import '../assets/style/OnDemand.css';
import image from '../assets/costom.webp'
import image2 from '../assets/webservices.jpg'
import image3 from '../assets/app.png'
import image4 from '../assets/micro.jpg'
import image5 from '../assets/open.webp'
import image6 from '../assets/ecom.jpeg'
import image7 from '../assets/wd.jpeg'

const serviceList = [
  {
    title: 'Custom Software Development',
    image:image,
    icon: 'fas fa-code',
    description:
      'We are a custom software development company providing custom software development services and life cycle management to develop, design, and maintain enterprise-level software systems.',
  },
  {
    title: 'Web Application Development',
    image:image2,
    icon: 'fas fa-globe',
    description:
      'Build scalable, modern web apps with strong backend and smooth UX/UI.',
  },
  {
    title: 'Mobile Apps Development',
    image:image3,
    icon: 'fas fa-mobile-alt',
    description:
      'Native and hybrid mobile apps that are reliable, fast, and beautiful.',
  },
  {
    title: 'Microsoft App Development',
    image:image4,
    icon: 'fab fa-windows',
    description:
      'Build robust Microsoft apps for enterprise-level workflows and productivity.',
  },
  {
    title: 'Open Source Development',
    image:image5,
    icon: 'fas fa-folder-open',
    description:
      'Budget-friendly and flexible open-source software development services.',
  },
  {
    title: 'Ecommerce Development',
    image:image6,
    icon: 'fas fa-shopping-cart',
    description:
      'Custom eCommerce platforms with stunning UI, performance, and payment solutions.',
  },
  {
    title: 'Web Design Service',
    image:image7,
    icon: 'fas fa-paint-brush',
    description:
      'Create eye-catching, user-focused website designs that convert visitors into customers.',
  },
];

function OnDemandServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="split-services-section">
      <div className="split-container">
        {/* LEFT - SERVICE LIST */}
        <div className="service-list">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className={`service-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <i className={service.icon}></i>
              <span>{service.title}</span>
            </div>
          ))}
        </div>

        {/* RIGHT - SERVICE DETAILS */}
        <div className="service-detail">
          <h2>{serviceList[activeIndex].title}</h2>
          <p>{serviceList[activeIndex].description}</p>
          <div className="image_holder">
          <img src={serviceList[activeIndex].image} alt="" />
          </div>
          
        
        </div>
      </div>
    </section>
  );
}

export default OnDemandServices;
