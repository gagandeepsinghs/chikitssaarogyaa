import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, UserCheck, Home, Heart, HeartHandshake, Sprout } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(5);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const features = [
    {
      title: "We Listen Before We Treat",
      desc: "Every patient has a different story. We take time to understand your concerns, explain treatment clearly, and help you make informed decisions.",
      icon: <MessageSquare size={24} strokeWidth={2} />,
      bgClass: "wcu-card--white"
    },
    {
      title: "Trusted Medical Care",
      desc: "Our doctors combine clinical expertise with evidence-based medicine to provide safe, ethical, and personalised care.",
      icon: <UserCheck size={24} strokeWidth={2} />,
      bgClass: "wcu-card--white"
    },
    {
      title: "Healthcare for the Whole Family",
      desc: "From children and women to adults and seniors — caring for every stage of life with the same dedication.",
      icon: <Home size={24} strokeWidth={2} />,
      bgClass: "wcu-card--white"
    },
    {
      title: "Compassion Comes First",
      desc: "We create a welcoming environment where every patient feels respected, comfortable, and genuinely cared for.",
      icon: <Heart size={24} strokeWidth={2} />,
      bgClass: "wcu-card--white"
    },
    {
      title: "Modern Care with a Human Touch",
      desc: "Advanced medical knowledge matters — and so does empathy. The best care happens when expertise meets kindness.",
      icon: <HeartHandshake size={24} strokeWidth={2} />,
      bgClass: "wcu-card--white"
    },
    {
      title: "Our Promise",
      desc: "To help you and your family live healthier lives through honest advice, compassionate care, and trusted medical treatment.",
      icon: <Sprout size={24} strokeWidth={2} />,
      bgClass: "wcu-card--dark"
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className={`wcu-section ${isVisible ? 'wcu--visible' : ''}`}
    >
      <div className="wcu-container">
        
        {/* Header Block */}
        <div className="wcu-header">
          <span className="wcu-subheading">— WHY CHOOSE US —</span>
          <h2 className="wcu-title">Why Choose Chikitssa Arogya?</h2>
          <p className="wcu-intro-text">
            The name <strong>Chikitssa Arogyaa</strong> reflects the philosophy we follow every day.
          </p>
        </div>

        {/* Philosophy Cards Row */}
        <div className="wcu-phil-row">
          <div className="wcu-phil-card">
            <span className="wcu-sanskrit">चिकित्सा</span>
            <h3 className="wcu-phil-name">Chikitssa</h3>
            <p className="wcu-phil-desc">
              Treatment, healing, and the science of caring for health.
            </p>
          </div>
          
          <div className="wcu-phil-plus">+</div>

          <div className="wcu-phil-card">
            <span className="wcu-sanskrit">आरोग्य</span>
            <h3 className="wcu-phil-name">Arogyaa</h3>
            <p className="wcu-phil-desc">
              Complete well-being — a healthy body, a peaceful mind, and a better quality of life.
            </p>
          </div>
        </div>

        {/* Transition Text */}
        <div className="wcu-transition-block">
          <h4 className="wcu-together-text">
            Together, Chikitssa Arogya stands for <em>healing that leads to complete wellness.</em>
          </h4>
          <p className="wcu-since-text">
            Since 2014, we have been committed to healthcare that goes beyond prescriptions — where every patient is heard, understood, and treated with compassion.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="wcu-grid">
          {features.map((feat, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className={`wcu-feature-card ${isExpanded ? 'wcu-card--expanded wcu-card--dark' : 'wcu-card--collapsed wcu-card--white'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
              >
                <span className="wcu-expand-indicator">
                  {isExpanded ? '−' : '+'}
                </span>
                <div className="wcu-icon-box">
                  {feat.icon}
                </div>
                <h4 className="wcu-feat-title">{feat.title}</h4>
                <div className={`wcu-feat-desc-wrapper ${isExpanded ? 'open' : ''}`}>
                  <p className="wcu-feat-desc">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline Quote */}
        <div className="wcu-bottom-quote">
          Because true healthcare isn't just about treating illness — it's about helping people live healthier, happier lives.
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
