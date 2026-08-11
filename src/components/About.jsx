import React, { useState } from 'react';
import { Target, Heart, Award, Calendar, Users, ShieldAlert } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const coreValues = [
    { name: "Compassion", desc: "We care with empathy, dignity, and respect." },
    { name: "Excellence", desc: "We strive for the highest standards in every aspect of care." },
    { name: "Integrity", desc: "We act with honesty, transparency, and ethical responsibility." },
    { name: "Innovation", desc: "We embrace continuous learning and modern healthcare practices." },
    { name: "Patient First", desc: "Every decision is guided by the well-being of our patients." },
    { name: "Prevention", desc: "We believe the best healthcare begins before illness." },
    { name: "Collaboration", desc: "Working together to deliver seamless, holistic care." }
  ];

  const timeline = [
    { year: "2014", title: "The Beginning", text: "Chikitssa Arogyaa was founded with a vision to provide compassionate, ethical, and evidence-based healthcare. Built on years of specialised training by Dr. Manu Sharma and Dr. Shefali Wadhwani Sharma, our journey began with a commitment to delivering trusted Mother & Child healthcare." },
    { year: "2015 – 2020", title: "Building Trust", text: "Over the years, we earned the confidence of thousands of families by providing quality care in Paediatrics, Neonatology, Obstetrics and Gynaecology. Every patient strengthened our foundation and inspired our growth." },
    { year: "2021", title: "Fertility Services", text: "To help more couples achieve their dream of parenthood, Chikitssa Arogyaa introduced Basic IVF Services, expanding our integrated Mother & Child care." },
    { year: "2022 – 2023", title: "Expanding Women's Health", text: "Advanced services in High-Risk Pregnancy Care, Infertility Treatment, Laparoscopic Gynaecology and Comprehensive Women's Health were further strengthened to provide complete care under one roof." },
    { year: "2024", title: "Multidisciplinary Child Care", text: "Our healthcare services expanded with specialist consultations in Specialist Paediatrics, Paediatric Neurology and Paediatric Surgery — making comprehensive child healthcare more accessible for families." },
    { year: "2025", title: "Development & Behaviour Therapy", text: "We established a dedicated Child Development & Behaviour Therapy Programme, focusing on Developmental Assessment, Behavioural Therapy, Early Intervention and Parent Guidance." },
    { year: "Aug 2026", title: "A New Milestone", text: "The launch of our dedicated Child Development & Behaviour Department marked another significant chapter, offering specialised developmental and behavioural care in an environment designed for children." },
    { year: "Today", title: "Growing with Every Family", text: "From a single vision to a multidisciplinary healthcare centre, Chikitssa Arogyaa continues to grow while remaining committed to its founding values of compassion, trust, and clinical excellence." }
  ];

  const founders = [
    { name: "Mrs. Suman Sharma", role: "Founder & Consultant Pediatrician", img: "https://chikitssaarogyaa.com/newdesign/assets/img/founder1.png" },
    { name: "Mr. Sudhir Sharma", role: "Founder & Medical Director", img: "https://chikitssaarogyaa.com/newdesign/assets/img/founder2.jpg" }
  ];

  const doctors = [
    { name: "Dr. Manu Sharma", role: "Consultant: Pediatrician & Neonatologist", desc: "M.D(Pediatrics), Fellowship in Neonatology (IAP), PGPN(Boston, USA), IPPN (Europe)", img: "https://chikitssaarogyaa.com/newdesign/assets/img/manusharma.webp" },
    { name: "Dr. Shefali Sharma", role: "Consultant Obstetrician and Gynaecologist", desc: "IVF Specialist & Laparoscopic Gynae Surgeon, M.D(Obstetrics & Gynaecology), DNB, FRM Fellowship in Reproductive Medicine/IVF", img: "https://chikitssaarogyaa.com/newdesign/assets/img/drshefali.jpg" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="about-header text-center">
          <span className="about-subheading">— ABOUT US —</span>
          <h2 className="about-title">Why Chikitssa Arogya Stands Out</h2>
          <p className="about-desc">
            A premium family healthcare facility providing comprehensive, dedicated, and compassionate care for mother and child.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="about-tabs">
          <button 
            className={`about-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Target size={16} />
            <span>Overview &amp; Values</span>
          </button>
          <button 
            className={`about-tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            <Calendar size={16} />
            <span>Our Journey</span>
          </button>
          <button 
            className={`about-tab-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            <Users size={16} />
            <span>Founders &amp; Team</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="about-tab-content">
          
          {/* 1. OVERVIEW & VALUES PANEL */}
          {activeTab === 'overview' && (
            <div className="about-panel overview-panel animate-fade-in">
              <div className="overview-grid">
                
                {/* Left Side: Hospital Intro & Mission */}
                <div className="overview-left">
                  <div className="overview-card info-card">
                    <h3>Who We Are</h3>
                    <p>
                      Chikitssa Arogyaa - A Complete Mother, Child &amp; Family Care Hospital is a premier healthcare facility in India that specializes in providing a range of services for children and families. Our team of healthcare professionals includes pediatricians, obstetricians and gynecologists, mental health professionals, nutritionists, and therapists.
                    </p>
                  </div>
                  
                  <div className="overview-card mission-card">
                    <div className="mission-title-row">
                      <Target className="mission-icon" size={24} />
                      <h3>Our Mission</h3>
                    </div>
                    <p>
                      To provide accessible, evidence-based healthcare with compassion, integrity, and clinical excellence—promoting wellness, preventing illness, and improving lives at every stage.
                    </p>
                  </div>
                </div>

                {/* Right Side: Core Values */}
                <div className="overview-right">
                  <div className="values-container">
                    <h3>Our Core Values</h3>
                    <div className="values-list">
                      {coreValues.map((val, idx) => (
                        <div key={idx} className="value-item">
                          <div className="value-bullet">0{idx + 1}</div>
                          <div className="value-text">
                            <h4>{val.name}</h4>
                            <p>{val.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 2. OUR JOURNEY PANEL */}
          {activeTab === 'journey' && (
            <div className="about-panel journey-panel animate-fade-in">
              <div className="journey-intro">
                <h3>Our Milestone Journey</h3>
                <p>Follow our story of growth, excellence, and trust built with families over the years.</p>
              </div>

              <div className="about-timeline">
                <div className="about-timeline-line"></div>
                {timeline.map((item, idx) => (
                  <div key={idx} className={`about-timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="about-timeline-dot"></div>
                    <div className="about-timeline-card">
                      <span className="about-timeline-year">{item.year}</span>
                      <h4 className="about-timeline-card-title">{item.title}</h4>
                      <p className="about-timeline-card-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Philosophy Callout */}
              <div className="about-phil-callout">
                <span className="phil-label">Our Philosophy</span>
                <h4 className="phil-title">Compassion. Care. Creation.</h4>
                <div className="phil-grid">
                  <div className="phil-item">
                    <h5>Compassion</h5>
                    <p>In every interaction and care conversation.</p>
                  </div>
                  <div className="phil-item">
                    <h5>Care</h5>
                    <p>In every medical option and clinical decision.</p>
                  </div>
                  <div className="phil-item">
                    <h5>Creation</h5>
                    <p>Supporting life's most precious journeys and helping families flourish.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. FOUNDERS & TEAM PANEL */}
          {activeTab === 'team' && (
            <div className="about-panel team-panel animate-fade-in">
              
              {/* Founders Section */}
              <div className="team-section">
                <h3 className="team-section-title">Founders</h3>
                <div className="team-grid">
                  {founders.map((f, idx) => (
                    <div key={idx} className="team-member-card">
                      <div className="member-img-wrap">
                        <img src={f.img} alt={f.name} className="member-img" />
                      </div>
                      <div className="member-info">
                        <h4>{f.name}</h4>
                        <p className="member-role">{f.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Doctors Section */}
              <div className="team-section mt-5">
                <h3 className="team-section-title">Our Doctors</h3>
                <div className="team-grid">
                  {doctors.map((d, idx) => (
                    <div key={idx} className="team-member-card doc-member-card">
                      <div className="member-img-wrap">
                        <img src={d.img} alt={d.name} className="member-img" />
                      </div>
                      <div className="member-info">
                        <h4>{d.name}</h4>
                        <p className="member-role">{d.role}</p>
                        <p className="member-desc">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default About;
