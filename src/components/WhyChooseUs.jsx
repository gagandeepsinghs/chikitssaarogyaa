import React from 'react';
import { HeartHandshake, UserCheck, Stethoscope, Users } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Compassionate Care",
      desc: "Every patient is treated with empathy, respect and understanding.",
      icon: <HeartHandshake size={28} />
    },
    {
      title: "Experienced Specialists",
      desc: "Highly qualified doctors dedicated to your family's health.",
      icon: <Stethoscope size={28} />
    },
    {
      title: "Personalised Attention",
      desc: "Customised treatment plans tailored to your specific needs.",
      icon: <UserCheck size={28} />
    },
    {
      title: "Family-Centred Approach",
      desc: "Healthcare that involves and supports the whole family.",
      icon: <Users size={28} />
    }
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <div className="why-container">
          <div className="why-visual animate-fade-up">
            <div className="why-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor consulting with a family" 
                className="why-img"
              />
              <div className="why-experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of<br/>Trust</span>
              </div>
            </div>
          </div>
          
          <div className="why-content animate-fade-up delay-200">
            <span className="subheading">Why Chikitssa</span>
            <h2>Why Families Choose Us</h2>
            <p className="why-desc">
              We combine medical excellence with a warm, comforting environment. Our multidisciplinary team works together to provide the highest standard of care for women and children.
            </p>
            
            <div className="why-features">
              {features.map((feature, index) => (
                <div key={index} className="why-feature">
                  <div className="why-feature-icon">{feature.icon}</div>
                  <div className="why-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
