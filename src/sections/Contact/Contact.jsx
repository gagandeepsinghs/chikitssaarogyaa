import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info animate-fade-up">
            <span className="subheading">Visit Us</span>
            <h2>Get in Touch</h2>
            <p className="contact-desc">
              We are conveniently located in Chandigarh. Reach out to us for appointments or any health-related inquiries.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Clinic Address</h4>
                  <p>Kothi No - 1048, Sector- 37-B, Chandigarh- 160036, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 99151 61048</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@chikitssaarogyaa.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Clock size={20} /></div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a 
                href="https://www.google.com/maps?q=Kothi+No+-+1048,+Sector-+37-B,+Chandigarh-+160036,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Get Directions
              </a>
              <a href="tel:+919915161048" className="btn btn-outline">Call Us</a>
            </div>
          </div>

          <div className="contact-map animate-fade-up delay-200">
            {/* Map Placeholder */}
            <div className="map-placeholder">
              <iframe 
                src="https://maps.google.com/maps?q=Kothi+No+-+1048,+Sector-+37-B,+Chandigarh-+160036,+India&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
