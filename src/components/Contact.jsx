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
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Clinic Address</h4>
                  <p>SCO 123, Sector 45-C, Chandigarh, India, 160047</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 99151 61048</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@chikitssaarogyaa.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Clock size={24} /></div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="#" className="btn btn-primary">Get Directions</a>
              <a href="tel:+919915161048" className="btn btn-outline">Call Us</a>
            </div>
          </div>

          <div className="contact-map animate-fade-up delay-200">
            {/* Map Placeholder */}
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.735062644372995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1684307525492!5m2!1sen!2sin" 
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
