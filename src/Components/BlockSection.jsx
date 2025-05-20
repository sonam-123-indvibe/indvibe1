import React from 'react';
import '../assets/style/Block.css';
import UIUXImage from '../assets/block.jpg'
// import { FaCloud, FaRobot, FaBrain, FaCode, FaServer, FaCogs, FaDatabase, FaProjectDiagram, FaFlask, FaLanguage, FaStream } from 'react-icons/fa';
// import { SiScikitlearn, SiKeras, SiXgboost, SiPytorch, SiTensorflow, SiSpacy, SiOpencv, SiYolov5, SiApacheairflow, SiApachekafka, SiApacheflink, SiMlflow, SiGooglecloud,  } from 'react-icons/si';
import {
  FaCube, FaLock, FaAppStore, FaMoneyCheckAlt,
  FaImage, FaWallet, FaCoins, FaBuilding,
  FaProjectDiagram, FaComments, FaTruck, FaIdCard,
  FaGlobe, FaExchangeAlt, FaNetworkWired
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const blockchainServices = [
  {
    icon: <FaCube />,
    title: "Custom Blockchain Development",
    desc: "Tailor-made blockchain networks for your business. Secure, scalable, and seamlessly integrated."
  },
  {
    icon: <FaLock />,
    title: "Smart Contract Development",
    desc: "Secure and transparent smart contracts with full automation and audits."
  },
  {
    icon: <FaAppStore />,
    title: "DApp Development",
    desc: "Build user-friendly decentralized apps compatible with major blockchain networks."
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "DeFi Development",
    desc: "Launch secure DeFi platforms with features like staking, yield farming, and liquidity pools."
  },
  {
    icon: <FaImage />,
    title: "NFT Marketplace Development",
    desc: "Create custom NFT marketplaces with multi-chain support and wallet integration."
  },
  {
    icon: <FaWallet />,
    title: "Crypto Wallet Development",
    desc: "Multi-currency wallets with advanced security and easy integration with DeFi/NFT apps."
  },
  {
    icon: <FaCoins />,
    title: "Tokenization Services",
    desc: "Convert assets into digital tokens with compliance and smart contract integration."
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Blockchain Solutions",
    desc: "Private or hybrid blockchains for secure data sharing and enterprise integration."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Hyperledger Development",
    desc: "Build permissioned networks using Hyperledger Fabric, Sawtooth, and more."
  },
  {
    icon: <FaComments />,
    title: "Blockchain Consulting Services",
    desc: "Get expert blockchain guidance and integration roadmap tailored to your needs."
  },
  {
    icon: <FaTruck />,
    title: "Supply Chain Blockchain Solutions",
    desc: "Track products in real-time using secure, AI/IoT-powered blockchain solutions."
  },
  {
    icon: <FaIdCard />,
    title: "Blockchain Identity Management",
    desc: "Create tamper-proof, self-sovereign digital identity systems."
  },
  {
    icon: <FaGlobe />,
    title: "Metaverse Development",
    desc: "Build immersive blockchain-based metaverse experiences and digital economies."
  },
  {
    icon: <FaExchangeAlt />,
    title: "Crypto Exchange Development",
    desc: "Develop secure and scalable centralized, decentralized, or hybrid exchanges."
  },
  {
    icon: <FaNetworkWired />,
    title: "Web3 Development",
    desc: "Create decentralized apps with blockchain-powered secure user experiences."
  },
];


const BlockSection = () => {
  return (
    <>
     <section className="uiux-hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Leading Blockchain Development Company</h1>
            <p>
            Custom Blockchain Development Services for a Decentralized Future
            </p>

            <p>
            Unlock the full potential of blockchain with 100% guaranteed security, transparency, and scalability for your business. Get a free consultation with our blockchain software development company today and take the first step toward innovation!
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
          {blockchainServices.map((service, idx) => (
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

export default BlockSection;
