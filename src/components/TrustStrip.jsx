import React from 'react';
import { Award, Users, Heart, Baby } from 'lucide-react';
import './TrustStrip.css';

const TrustStrip = () => {
  const stats = [
    { icon: <Award size={24} />, title: "15+ Years", subtitle: "of Experience" },
    { icon: <Users size={24} />, title: "Expert", subtitle: "Specialists" },
    { icon: <Heart size={24} />, title: "Patient-Centred", subtitle: "Care" },
    { icon: <Baby size={24} />, title: "Mother & Child", subtitle: "Focused" }
  ];

  return (
    <section className="trust-strip">
      <div className="container">
        <h3 className="trust-title text-center">Trusted Healthcare for Families</h3>
        <div className="trust-grid">
          {stats.map((stat, index) => (
            <div key={index} className="trust-item animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="trust-icon">{stat.icon}</div>
              <div className="trust-content">
                <span className="trust-stat-title">{stat.title}</span>
                <span className="trust-stat-subtitle">{stat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
