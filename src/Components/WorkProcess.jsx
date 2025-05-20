import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/WorkProcess.css';

function WorkProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    { icon: 'fa-lightbulb', title: 'Get Ideas' },
    { icon: 'fa-pencil-ruler', title: 'Sketch Up' },
    { icon: 'fa-comments', title: 'Discuss' },
    { icon: 'fa-sync', title: 'Revise' },
    { icon: 'fa-thumbs-up', title: 'Approve' },
    { icon: 'fa-rocket', title: 'Launch' },
  ];

  return (
    <div className="work-process-flow py-5 text-white">
      <div className="container text-center">
        <h2 className="section-title mb-4" data-aos="fade-up">
          Our Work Process
        </h2>
        <p className="section-subtitle mb-5" data-aos="fade-up" data-aos-delay="200">
          We take your business to the next level by reducing the gap between you and your success.
        </p>

        <div className="flow-chart d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up" data-aos-delay="400">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="step-box">
                <div className="icon-box">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <p className="step-title">{step.title}</p>
              </div>
              {/* Add arrow except after last step */}
              {index !== steps.length - 1 && (
                <div className="arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
