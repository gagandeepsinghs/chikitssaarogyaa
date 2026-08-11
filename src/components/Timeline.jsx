import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline = () => {
  const milestones = [
    { year: "2014", title: "Founded", desc: "Chikitssa Arogyaa opened its doors to provide dedicated care for mothers and children." },
    { year: "2021", title: "Expanded Healthcare Services", desc: "Added new specialities and advanced equipment to our state-of-the-art facility." },
    { year: "2024", title: "Multidisciplinary Child Care", desc: "Formed a comprehensive team approach for complex pediatric conditions." },
    { year: "2025", title: "Child Development Services", desc: "Initiated specialized programs for early intervention and behavioural support." },
    { year: "2026", title: "New Child Development Department", desc: "Launched a dedicated, full-scale department for holistic child development." }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section timeline-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Our Journey</span>
          <h2>A Legacy of Care</h2>
        </div>

        <div className="timeline-container" ref={timelineRef}>
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h4 className="timeline-title">{milestone.title}</h4>
                <p className="timeline-desc">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
