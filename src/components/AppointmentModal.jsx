import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, MapPin, ChevronLeft, ChevronRight, User, Phone, Search, Video, Building } from 'lucide-react';
import logoVideo from '../assets/video_2026-08-11_12-31-26.mp4';
import './AppointmentModal.css';

const DOCTORS = [
  { id: 'manu', name: 'Dr. Manu Sharma', title: 'Neonatologist', degrees: 'MD - Pediatrics', avatar: 'https://i.pravatar.cc/150?u=manu' },
  { id: 'shefali', name: 'Dr. Shefali Sharma', title: 'Obstetrician & Gynecologist', degrees: 'MD', avatar: 'https://i.pravatar.cc/150?u=shefali' },
  { id: 'himani', name: 'Dr. Himani Adarsh', title: 'Child Development Consultant', degrees: 'MBBS, MD, DM, M.D. Psychiatry, D.M. Child and Adolescent Psychiatry', avatar: 'https://i.pravatar.cc/150?u=himani' },
  { id: 'ritish', name: 'Dr. Ritish Saini', title: 'Paediatrician', degrees: '', avatar: 'https://i.pravatar.cc/150?u=ritish' }
];

const TIME_SLOTS_MORNING = ['8:00AM - 9:30AM', '10:00AM - 11:30AM'];
const TIME_SLOTS_EVENING = ['5:00PM - 6:30PM', '7:00PM - 8:30PM'];

const AppointmentModal = ({ onClose }) => {
  const [stage, setStage] = useState('animation');
  const [formStep, setFormStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    department: '', doctor: '', doctorTitle: '',
    appointmentType: '',
    date: new Date().toISOString().split('T')[0],
    time: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (stage === 'animation') {
      const timer = setTimeout(() => setStage('form'), 7500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSelectDoctor = (doc, type) => {
    setFormData(prev => ({ ...prev, doctor: doc.name, doctorTitle: doc.title, department: doc.title, appointmentType: type }));
    setFormStep(2);
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({ ...prev, time }));
    if (errors.time) setErrors(prev => ({ ...prev, time: null }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleNextToStep3 = () => {
    if (!formData.time) { setErrors({ time: 'Please select a time slot' }); return; }
    setFormStep(3);
  };

  const handleNextToStep4 = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.phone) tempErrors.phone = 'Phone is required';
    if (Object.keys(tempErrors).length > 0) { setErrors(tempErrors); return; }
    setFormStep(4);
  };

  const handleSubmit = () => setTimeout(() => setStage('success'), 800);

  const getSelectedDayName = () => {
    if (!formData.date) return '';
    return new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long' });
  };

  const filteredDoctors = DOCTORS.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`am-overlay ${stage}`}>
      {stage === 'animation' && (
        <div className="am-animation-wrap">
          <div className="am-animation-bg"></div>
          <video 
            className="am-logo-video" 
            autoPlay 
            muted 
            playsInline 
            onPlay={(e) => { e.target.playbackRate = 0.7; }}
            onEnded={() => setStage('form')}
          >
            <source src={logoVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {stage === 'form' && (
        <div className="am-shell">

          {/* ── HEADER ── */}
          <div className="am-header">
            <div className="am-header-brand">
              <div className="am-header-logo">
                <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="am-header-logo-svg">
                  {/* Mother embrace circle */}
                  <path d="M82 32 C88 42 88 58 82 68 C72 82 55 88 40 82 C22 72 15 50 25 32 C32 20 45 15 58 17" />
                  {/* Mother's face profile & head */}
                  <path d="M44 32 C35 40 33 52 37 62 C41 70 50 76 60 74" />
                  <path d="M44 32 C50 30 55 35 53 41 C51 46 44 49 41 52" />
                  {/* Baby's face profile & head */}
                  <path d="M64 54 C69 54 73 58 71 63 C69 67 63 69 59 66" />
                  {/* Hand/flower support at bottom */}
                  <path d="M50 68 C52 73 57 75 62 72" />
                  <path d="M50 68 C48 73 43 75 38 72" />
                </svg>
              </div>
              <span className="am-header-title">
                <span className="am-brand-name">Chikitssa Arogyaa</span>
                <span className="am-brand-tagline"> : A complete mother and child clinic</span>
              </span>
            </div>

            <button className="am-back-btn" onClick={onClose} aria-label="Back to Homepage">
              <ChevronLeft size={16} strokeWidth={2.5} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* ── BODY ── */}
          <div className="am-body">

            {/* LEFT: Wizard */}
            <div className="am-wizard">

              {/* Stepper for step > 1 */}
              {formStep > 1 && (
                <div className="am-stepper">
                  {[2, 3, 4].map((step) => (
                    <div key={step} className={`am-step ${formStep >= step ? 'am-step--done' : ''} ${formStep === step ? 'am-step--active' : ''}`}>
                      <div className="am-step-circle">{formStep > step ? <CheckCircle size={16} /> : step}</div>
                      <div className="am-step-label">Step {step}</div>
                      {step < 4 && <div className="am-step-line"><div className="am-step-line-fill" style={{ width: formStep > step ? '100%' : '0%' }} /></div>}
                    </div>
                  ))}
                </div>
              )}

              {/* ── STEP 1: Doctor List ── */}
              {formStep === 1 && (
                <div className="am-step-content">
                  <div className="am-search-wrap">
                    <div className="am-search-container">
                      <Search size={18} className="am-search-icon" />
                      <input
                        type="text"
                        placeholder="Search by specialist or name..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="am-search-input"
                      />
                    </div>
                  </div>

                  <div className="am-doctor-list">
                    {filteredDoctors.map((doc, index) => (
                      <div 
                        key={doc.id} 
                        className="am-doctor-card"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <div className="am-doctor-info">
                          <div className="am-doctor-avatar">
                            <img src={doc.avatar} alt={doc.name} className="am-doctor-img" />
                          </div>
                          <div className="am-doctor-text">
                            <div className="am-doctor-name">{doc.name}</div>
                            <div className="am-doctor-title">{doc.title}</div>
                            {doc.degrees && <div className="am-doctor-degrees">Degrees: {doc.degrees}</div>}
                          </div>
                        </div>
                        <div className="am-doctor-actions">
                          <button className="am-appt-btn" onClick={() => handleSelectDoctor(doc, 'In-clinic')}>
                            <Building size={14} />
                            <span>In-clinic Appointment</span>
                          </button>
                          <button className="am-appt-btn" onClick={() => handleSelectDoctor(doc, 'Video')}>
                            <Video size={14} />
                            <span>Video Consultation</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP 2: Date & Time ── */}
              {formStep === 2 && (
                <div className="am-step-content">
                  <div className="am-doctor-profile-card">
                    <div className="am-dp-avatar"><User size={30} color="#0F5C5E" /></div>
                    <div className="am-dp-name">{formData.doctor} <span className="am-dp-type">({formData.appointmentType})</span></div>
                    <div className="am-dp-title">{formData.doctorTitle}</div>
                  </div>

                  <div className="am-schedule-info">
                    <div className="am-schedule-label">Working Days</div>
                    <div className="am-schedule-text">Morning: Mon / Tue / Wed / Thu / Fri / Sat / Sun</div>
                    <div className="am-schedule-text">Evening: Mon / Tue / Wed / Thu / Fri / Sat</div>
                  </div>

                  <div className="am-date-area">
                    <div className="am-day-selected">Selected Day: <strong>{getSelectedDayName()}</strong></div>
                    <div className="am-date-hint">Date Format: MM/DD/YYYY</div>
                    <div className="am-date-time-row">
                      <div className="am-date-input-wrap">
                        <input type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="am-date-input" />
                        <div className="am-cal-btn"><Calendar size={16} color="white" /></div>
                      </div>
                      <div className="am-time-wrap">
                        <span className="am-time-label">Select:</span>
                        <div className="am-time-pills">
                          {[...TIME_SLOTS_MORNING, ...TIME_SLOTS_EVENING].map(time => (
                            <button key={time} className={`am-time-pill ${formData.time === time ? 'am-time-pill--selected' : ''}`} onClick={() => handleTimeSelect(time)}>{time}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                    {errors.time && <span className="am-error">{errors.time}</span>}
                  </div>

                  <div className="am-actions">
                    <button className="am-btn-back" onClick={() => setFormStep(1)}>Back</button>
                    <button className="am-btn-proceed" onClick={handleNextToStep3}>Proceed</button>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Patient Info ── */}
              {formStep === 3 && (
                <div className="am-step-content">
                  <div className="am-step-title">Patient Details</div>
                  <div className="am-form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'am-input am-input--error' : 'am-input'} />
                    {errors.name && <span className="am-error">{errors.name}</span>}
                  </div>
                  <div className="am-form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'am-input am-input--error' : 'am-input'} />
                    {errors.phone && <span className="am-error">{errors.phone}</span>}
                  </div>
                  <div className="am-form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="am-input" />
                  </div>
                  <div className="am-actions">
                    <button className="am-btn-back" onClick={() => setFormStep(2)}>Back</button>
                    <button className="am-btn-proceed" onClick={handleNextToStep4}>Proceed</button>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Confirm ── */}
              {formStep === 4 && (
                <div className="am-step-content">
                  <div className="am-step-title">Confirm Appointment</div>
                  <div className="am-confirm-box">
                    <p><strong>Doctor:</strong> {formData.doctor}</p>
                    <p><strong>Type:</strong> {formData.appointmentType}</p>
                    <p><strong>Specialty:</strong> {formData.department}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                    <p><strong>Patient:</strong> {formData.name}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                  </div>
                  <div className="am-actions">
                    <button className="am-btn-back" onClick={() => setFormStep(3)}>Back</button>
                    <button className="am-btn-proceed" onClick={handleSubmit}>Confirm Booking</button>
                  </div>
                </div>
              )}

            </div>{/* end am-wizard */}

            {/* RIGHT: Contact Sidebar */}
            <div className="am-sidebar">
              <div className="am-sidebar-card">
                <div className="am-sidebar-header">Contact Us</div>

                <div className="am-gallery">
                  <button className="am-gallery-btn am-gallery-btn--prev"><ChevronLeft size={20} color="white" /></button>
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Clinic" className="am-gallery-img" />
                  <button className="am-gallery-btn am-gallery-btn--next"><ChevronRight size={20} color="white" /></button>
                  <div className="am-gallery-dots">
                    <span className="am-dot am-dot--active"></span>
                    <span className="am-dot"></span>
                    <span className="am-dot"></span>
                  </div>
                </div>

                <div className="am-contact-info">
                  <div className="am-contact-row">
                    <MapPin size={20} color="#4878a6" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="am-contact-clinic-name">Chikitssa Arogyaa : A complete mother and child clinic</div>
                      <div className="am-contact-address">House No 1048, Sector - 37 B, Chandigarh, India, 160036</div>
                    </div>
                  </div>
                  <div className="am-contact-divider"></div>
                  <div className="am-contact-row">
                    <Phone size={20} color="#4878a6" style={{ flexShrink: 0 }} />
                    <div>
                      <div className="am-contact-label">Contact No</div>
                      <div className="am-contact-number">9915161048</div>
                    </div>
                  </div>
                </div>

                <div className="am-store-badges">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="am-badge" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="am-badge" />
                </div>
              </div>
            </div>

          </div>{/* end am-body */}
        </div>
      )}

      {stage === 'success' && (
        <div className="am-success">
          <div className="am-success-icon"><CheckCircle size={60} color="#0F5C5E" /></div>
          <h2>Booking Confirmed!</h2>
          <p>Thank you, <strong>{formData.name}</strong>. Your {formData.appointmentType} appointment for <strong>{formData.doctor}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been received.</p>
          <button className="am-btn-proceed" style={{ marginTop: 24 }} onClick={onClose}>Return to Homepage</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentModal;
