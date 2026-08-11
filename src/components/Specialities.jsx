import React from 'react';
import { Baby, Activity, HeartPulse, Brain, ArrowRight } from 'lucide-react';
import './Specialities.css';

const Specialities = () => {
  const services = [
    {
      id: "01",
      title: "Paediatrics",
      desc: "Comprehensive healthcare for infants, children and adolescents.",
      icon: <Baby size={32} />
    },
    {
      id: "02",
      title: "Gynaecology",
      desc: "Personalised healthcare for women through every stage of life.",
      icon: <Activity size={32} />
    },
    {
      id: "03",
      title: "Fertility Care",
      desc: "Compassionate and personalised reproductive healthcare.",
      icon: <HeartPulse size={32} />
    },
    {
      id: "04",
      title: "Child Development",
      desc: "Helping children grow, learn, communicate and thrive.",
      icon: <Brain size={32} />
    }
  ];

  return (
    <section id="services" className="section specialities">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Our Services</span>
          <h2>Complete Care Under One Roof</h2>
        </div>
        
        <div className="grid grid-cols-4 specialities-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="speciality-card animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-top">
                <span className="speciality-id">{service.id}</span>
                <div className="speciality-icon">{service.icon}</div>
              </div>
              <h4 className="speciality-title">{service.title}</h4>
              <p className="speciality-desc">{service.desc}</p>
              <a href="#" className="speciality-link">
                Explore Care <ArrowRight size={16} className="arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
