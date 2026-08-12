import React from 'react';
import { Award, Users, Heart, Baby } from 'lucide-react';
import './TrustStrip.css';

const TrustStrip = () => {
  const stats = [
    { icon: <Award size={20} />, title: "15+ Years", subtitle: "of Experience" },
    { icon: <Users size={20} />, title: "Expert Specialists", subtitle: "Across All Departments" },
    { icon: <Heart size={20} />, title: "Patient-Centred", subtitle: "Compassionate Care" },
    { icon: <Baby size={20} />, title: "Mother & Child", subtitle: "Focused Healthcare" }
  ];

  return (
    <div className="trust-strip">
      <div className="trust-strip-inner container">
        <span className="trust-strip-label">Trusted Healthcare for Families</span>
        <div className="trust-strip-divider" />
        <div className="trust-strip-stats">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="trust-stat-item">
                <span className="trust-stat-icon">{stat.icon}</span>
                <div className="trust-stat-text">
                  <span className="trust-stat-title">{stat.title}</span>
                  <span className="trust-stat-subtitle">{stat.subtitle}</span>
                </div>
              </div>
              {index < stats.length - 1 && <div className="trust-stat-sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
