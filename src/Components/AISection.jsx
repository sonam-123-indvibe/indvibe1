import React from 'react';
import '../assets/style/AISection.css';
import UIUXImage from '../assets/AI.jpeg'
import { FaCloud, FaRobot, FaBrain, FaCode, FaServer, FaCogs, FaDatabase, FaProjectDiagram, FaFlask, FaLanguage, FaStream } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { SiScikitlearn, SiKeras, SiXgboost, SiPytorch, SiTensorflow, SiSpacy, SiOpencv, SiYolov5, SiApacheairflow, SiApachekafka, SiApacheflink, SiMlflow, SiGooglecloud,  } from 'react-icons/si';

const aiServices = [
  {
    icon: <FaBrain />,
    title: "Machine Learning & Deep Learning",
    desc: "Leverage TensorFlow, PyTorch, Scikit-Learn, Keras, and XGBoost for intelligent models."
  },
  {
    icon: <FaLanguage />,
    title: "Natural Language Processing (NLP)",
    desc: "Empower applications with SpaCy, NLTK, BERT, GPT, and other language models."
  },
  {
    icon: <FaStream />,
    title: "Computer Vision",
    desc: "Implement powerful vision tools like OpenCV, YOLO, Detectron2, and Dlib."
  },
  {
    icon: <FaCloud />,
    title: "AI Cloud Platforms & Services",
    desc: "Utilize Google AI, AWS AI/ML, Microsoft Azure AI, and IBM Watson."
  },
  {
    icon: <FaFlask />,
    title: "AI Model Deployment & Optimization",
    desc: "Deploy and optimize AI with ONNX, MLflow, Triton Server, and Kubeflow."
  },
  {
    icon: <FaCode />,
    title: "General AI Development Languages",
    desc: "Build AI systems using Python, R, Java, and C++."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Specialized AI Languages",
    desc: "Explore advanced AI logic with Julia, Scala, Lisp, and Prolog."
  },
  {
    icon: <FaDatabase />,
    title: "Data Engineering & Pipeline Tools",
    desc: "Streamline workflows using Apache Airflow, Spark, Kafka, and Pandas."
  },
  {
    icon: <FaCogs />,
    title: "AI Testing & Monitoring Tools",
    desc: "Track and test with tools like Evidently AI, WhyLabs, Fiddler, and W&B."
  },
];

const AISection = () => {
  return (
    <>
     <section className="uiux-hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Leading Artificial Intelligence Development Company</h1>
            <p>
            AI Development Services for Apps and Software
            </p>
            <Link to={'/contact'} className="consult-btn">Request Free Consultation</Link>
          </div>
          <div className="image-section">
            <img src={UIUXImage} alt="UI UX Design Banner" />
          </div>
        </div>
      </div>
    </section>

    <section className="uiux-section">
      <div className="container">
        <h2 className="section-title">Shaping the Future with Advanced Artificial Intelligence
        Development Services</h2>
        <p className="section-subtitle">
        Unlock 100% smart workflow automation to stay ahead in an evolving digital landscape. Guaranteed advanced solutions empower businesses with smarter decision-making and seamless operations. Talk to AI experts for free! Claim your consultation with our artificial intelligence software development company and explore limitless possibilities.
        </p>
        <div className="grid-container">
          {aiServices.map((service, idx) => (
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

export default AISection;
