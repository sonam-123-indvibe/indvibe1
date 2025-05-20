import React, { useEffect, useState } from 'react';
import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-dark shadow' : 'bg-transparent'}`}>
      <div className="container-fluid px-4">
        <a className="navbar-brand text-white fw-bold" href="/">INDVIBE INFOTECH PVT LTD</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light p-2 rounded"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Contact info for large screens */}
          <ul className="navbar-nav mb-2 mb-lg-0 d-none d-lg-flex flex-row gap-3">
            <li className="nav-item text-white small">

            </li>
            
          </ul>

          {/* Right side items */}
          <ul className="navbar-nav ms-auto align-items-lg-center text-center">
            <li className="nav-item my-2 my-lg-0">
              <Link to="/contact" className="btn btn-info btn-sm text-white">Free Consultation</Link>
            </li>

            {/* Contact info for mobile view */}
            <li className="nav-item d-lg-none mt-3 text-white small">
             
              ☎️ 9926651477
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
