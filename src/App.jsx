import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import UIUXSection from './Components/UIUXSection'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import AISection from './Components/AISection'
import BlockSection from './Components/BlockSection'
import Ar from './Components/Ar'
import ContactUs from './Components/ContactUs'
import IoT from './Components/IoT'
import Web from './Components/Web'
import BrandingMarketing from './Components/BrandingMarketing'
import Footer from './Components/Footer'
import DevOpsServices from './Components/DevOpsServices'
import MicrosoftDevelopment from './Components/MicrosoftDevelopment'
import Mobile from './Components/Mobile'
import Cloud from './Components/CustomSoftwareSection'
import CustomSoftwareSection from './Components/CustomSoftwareSection'
import CyberSecuritySection from './Components/CyberSecuritySection'

import '../src/assets/style/AISection.css'
import ERPSection from './Components/ERPSection'

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UIUX" element={<UIUXSection />} />
        <Route path="/AI" element={<AISection />} />
        <Route path="/Block" element={<BlockSection />} />
        <Route path="/Ar" element={<Ar />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/IoT" element={<IoT />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Brand" element={<BrandingMarketing />} />
        <Route path="/DevOps" element={<DevOpsServices />} />
        <Route path="/Micro" element={<MicrosoftDevelopment />} />
        <Route path="/Mob" element={<Mobile />} />
        <Route path="/Costom" element={<CustomSoftwareSection />} />
        <Route path="/Cyber" element={<CyberSecuritySection />} />
        <Route path="/ERP" element={<ERPSection />} />
      </Routes>
      <Footer/>

      {/* DevOps   Micro*/}
    </>
  )
}

export default App
