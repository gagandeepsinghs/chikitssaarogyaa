import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ChildDevelopment.css';

const ChildDevelopment = () => {
  const services = [
    "Developmental Assessment",
    "Behavioural Support",
    "Early Intervention",
    "Parent Guidance",
    "Child Development Services"
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
            
            <ul className="child-dev-list">
              {services.map((service, index) => (
                <li key={index} className="child-dev-list-item">
                  <CheckCircle2 className="check-icon" size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="btn btn-premium child-dev-btn">
              Explore Child Development <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="child-dev-visual animate-fade-up delay-200">
            <div className="child-dev-image-wrapper">
              <div className="shape-blob shape-1"></div>
              <div className="shape-blob shape-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Child playing with blocks" 
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
