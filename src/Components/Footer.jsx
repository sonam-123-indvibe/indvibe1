import React from 'react';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import '../assets/style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info and Main Links */}
          <div className="col-md-4 mb-4">
          <h2 className="fw-bold">
  <span className="text-info">IndVibe</span><span className="text-white"> Infotech</span>
</h2>


            
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-3">Contact Us</h4>
            <p><FaMapMarkerAlt className="me-2" />
              302 B, 3rd Floor Rajat Complex, 18 Kibey Compound,<br />
              Near Madhumilan Square, Infront of Dawa Bazar, Indore
            </p>
            <p><FaPhoneAlt className="me-2" />
              <a href="tel:9926651477" className="footer-link">9926651477</a>,{' '}
              <a href="tel:9098884202" className="footer-link">9098884202</a>
            </p>
           
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-3 justify-content-center d-flex">Connect with Us</h4>
            <p>
              <a
                href="https://wa.me/919098884202"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link justify-content-center d-flex align-items-center mb-2"
              >
                <FaWhatsapp className="me-2 fs-4 text-success icon-hover" />
                WhatsApp
              </a>
             
            </p>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center m-0">
        Trademark & Copyright © Since 2015 - Indvibe Infotech Pvt Ltd  - Largest Technology Services Company.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
