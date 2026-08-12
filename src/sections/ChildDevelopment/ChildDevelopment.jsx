import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ChildDevelopment.css';

const ChildDevelopment = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      title: "Developmental Assessment",
      desc: "Comprehensive evaluation of speech, motor skills, social behavior, and cognitive milestones to track and support your child's progress."
    },
    {
      title: "Behavioural Support",
      desc: "Tailored strategies and positive reinforcement therapies to manage behavioral challenges, hyperactive tendencies, and emotional regulation."
    },
    {
      title: "Early Intervention",
      desc: "Structured, play-based therapies designed for infants and toddlers to address developmental delays at the earliest, most critical stages."
    },
    {
      title: "Parent Guidance",
      desc: "Empowering families with practical guidance, coaching, and tools to support their child's learning and growth at home."
    },
    {
      title: "Child Development Services",
      desc: "A holistic suite of specialized services including speech therapy, occupational therapy, and sensory integration."
    }
  ];

  return (
    <section id="child-development" className="section child-dev">
      <div className="container">
        <div className="child-dev-container">
          <div className="child-dev-content animate-fade-up">
            <div className="badge badge-new mb-4">NEW DEPARTMENT</div>
            <h2>Helping Children Grow, Learn & Thrive</h2>
            <p className="child-dev-desc">
              Every child's developmental journey is unique. Our new Child Development Centre offers comprehensive assessments and tailored interventions to help your child reach their full potential in a nurturing environment.
            </p>
            
            <div className="child-dev-accordion">
              {services.map((service, index) => {
                const isOpen = activeIdx === index;
                return (
                  <div 
                    key={index} 
                    className={`child-dev-accordion-item ${isOpen ? 'open' : ''}`}
                    onClick={() => setActiveIdx(isOpen ? -1 : index)}
                  >
                    <div className="child-dev-accordion-header">
                      <CheckCircle2 className="check-icon" size={20} />
                      <span className="accordion-title">{service.title}</span>
                      <span className="accordion-arrow">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`child-dev-accordion-content-wrap ${isOpen ? 'open' : ''}`}>
                      <p className="child-dev-accordion-desc">{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <a href="#" className="btn btn-premium child-dev-btn">
              Explore Child Development <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="child-dev-visual animate-fade-up delay-200">
            <div className="child-dev-image-wrapper">
              <div className="shape-blob shape-1"></div>
              <div className="shape-blob shape-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor performing pediatric checkup on baby" 
                className="child-dev-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildDevelopment;
