import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import heroImg from '../../assets/chieldcare.png';
import './Hero.css';

const Hero = ({ onBookAppointment }) => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="badge badge-orange stagger-1">Premium Healthcare</div>
          <h1 className="hero-title stagger-2">
            Chikitssa Arogyaa <span className="text-gradient">Hospital</span>
          </h1>
          <p className="hero-text stagger-3">
            Expert paediatric, gynaecology and family healthcare delivered with compassion, experience and a personal touch in Chandigarh.
          </p>
          <div className="hero-actions stagger-4">
            <button className="btn btn-primary hero-btn" onClick={onBookAppointment}>
              Book Appointment Online <ArrowRight size={18} />
            </button>
            <a
              href="https://www.google.com/maps?q=Kothi+No+-+1048,+Sector-+37-B,+Chandigarh-+160036,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-up delay-200">
          <div className="hero-image-wrapper">
            <img
              src={heroImg}
              alt="Mother and child healthcare with doctor"
              className="hero-img animate-float"
            />

            {/* Floating Images */}
            <div className="floating-img-card card-1">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Medical specialist"
                className="floating-img"
              />
            </div>

            <div className="floating-img-card card-2">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Clinic interior"
                className="floating-img"
              />
            </div>

            <div className="floating-img-card card-3">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Stethoscope"
                className="floating-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
