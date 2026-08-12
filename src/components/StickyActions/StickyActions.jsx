import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, X } from 'lucide-react';
import './StickyActions.css';

const StickyActions = ({ onBookAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const directionsUrl = "https://www.google.com/maps?q=Kothi+No+-+1048,+Sector-+37-B,+Chandigarh-+160036,+India";

  // Close the floating actions menu when scrolling to prevent it from remaining open unnecessarily
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop/Laptop Sticky Expandable FAB (Left side) */}
      <div className="sticky-actions-desktop" aria-label="Quick Actions">
        <button 
          id="sticky-fab-toggle"
          className={`sticky-fab-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close actions menu" : "Open actions menu"}
        >
          {isOpen ? <X size={22} /> : <Calendar size={22} />}
        </button>

        <div className={`desktop-actions-menu ${isOpen ? 'open' : ''}`}>
          <button 
            id="sticky-book-btn-desktop"
            className="sticky-action-btn primary-btn" 
            onClick={() => {
              onBookAppointment();
              setIsOpen(false);
            }}
          >
            <div className="icon-wrapper">
              <Calendar size={18} />
            </div>
            <span>Book Appointment Online</span>
          </button>
          
          <a 
            id="sticky-directions-btn-desktop"
            href={directionsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sticky-action-btn secondary-btn"
            onClick={() => setIsOpen(false)}
          >
            <div className="icon-wrapper">
              <MapPin size={18} />
            </div>
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bar (Bottom of screen) */}
      <div className="sticky-actions-mobile" aria-label="Quick Mobile Actions">
        <a 
          id="sticky-call-btn-mobile"
          href="tel:+919915161048" 
          className="mobile-action-item call-action"
        >
          <Phone size={18} />
          <span>Call Clinic</span>
        </a>
        <button 
          id="sticky-book-btn-mobile"
          className="mobile-action-item book-action" 
          onClick={onBookAppointment}
        >
          <Calendar size={18} />
          <span>Book Online</span>
        </button>
        <a 
          id="sticky-directions-btn-mobile"
          href={directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-action-item directions-action"
        >
          <MapPin size={18} />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
};

export default StickyActions;
