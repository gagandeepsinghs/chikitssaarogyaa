import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { 
      name: 'Our Services', 
      href: '#services',
      dropdown: [
        { name: 'Pediatric Services', href: '#pediatric' },
        { name: 'Gynaecology Services', href: '#gynaecology' },
        { name: 'Others Services', href: '#others' }
      ]
    },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Why Chikitssa', href: '#why-us' },
    { 
      name: 'Media', 
      href: '#media',
      dropdown: [
        { name: 'Press Release', href: '#press-release' },
        { name: 'Gallery', href: '#gallery' }
      ]
    },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo-container">
            <a href="#" className="logo">
              <img src={logo} alt="Chikitssa Arogyaa" className="navbar-logo-img" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name} className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                    {link.dropdown && <ChevronDown size={16} className="dropdown-icon" />}
                  </a>
                  
                  {link.dropdown && (
                    <ul className="dropdown-menu">
                      {link.dropdown.map((dropItem) => (
                        <li key={dropItem.name}>
                          <a href={dropItem.href} className="dropdown-link">{dropItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary nav-cta" onClick={onBookAppointment}>
              Book Appointment Online
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="dropdown-icon" />}
                </a>
                {link.dropdown && (
                  <ul className="mobile-dropdown-menu">
                    {link.dropdown.map((dropItem) => (
                      <li key={dropItem.name}>
                        <a 
                          href={dropItem.href} 
                          className="mobile-dropdown-link"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
