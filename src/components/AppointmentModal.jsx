import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, MapPin, ChevronLeft, ChevronRight, User, Phone } from 'lucide-react';
import logoVideo from '../assets/video_2026-08-11_12-31-26.mp4';
import './AppointmentModal.css';

const DEPARTMENTS = [
  { id: 'paediatrics', name: 'Paediatrics', icon: '👶', doctor: 'Dr. Shefali', title: 'Paediatrician' },
  { id: 'gynaecology', name: 'Gynaecology', icon: '🌸', doctor: 'Dr. Manu Sharma', title: 'Gynaecologist / Neonatologist' },
  { id: 'fertility', name: 'Fertility Care', icon: '🌱', doctor: 'Dr. Aarti', title: 'Fertility Specialist' },
  { id: 'child-dev', name: 'Child Development', icon: '🧸', doctor: 'Dr. Vikas', title: 'Developmental Pediatrician' }
];

const TIME_SLOTS_MORNING = ['8:00AM - 9:30AM', '10:00AM - 11:30AM'];
const TIME_SLOTS_EVENING = ['5:00PM - 6:30PM', '7:00PM - 8:30PM'];

const AppointmentModal = ({ onClose }) => {
  const [stage, setStage] = useState('animation'); // 'animation' -> 'form' -> 'success'
  const [formStep, setFormStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    doctorTitle: '',
    date: new Date().toISOString().split('T')[0],
    time: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (stage === 'animation') {
      const timer = setTimeout(() => {
        setStage('form');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSelectDept = (dept) => {
    setFormData(prev => ({ 
      ...prev, 
      department: dept.name, 
      doctor: dept.doctor, 
      doctorTitle: dept.title 
    }));
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
    if (!formData.time) {
      setErrors({ time: 'Please select a time slot' });
      return;
    }
    setFormStep(3);
  };

  const handleNextToStep4 = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }
    setFormStep(4);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setStage('success');
    }, 800);
  };

  // Helper to format date
  const getSelectedDayName = () => {
    if (!formData.date) return '';
    const dateObj = new Date(formData.date);
    return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className={`appointment-modal-overlay ${stage}`}>
      <button className="modal-close-btn" onClick={onClose} aria-label="Close">
        <X size={28} />
      </button>

      {stage === 'animation' && (
        <div className="logo-animation-container">
          <video 
            className="logo-video-anim" 
            autoPlay 
            muted 
            playsInline 
            onEnded={() => setStage('form')}
          >
            <source src={logoVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {stage === 'form' && (
        <div className="appointment-layout">
          {/* LEFT COLUMN: Booking Wizard */}
          <div className="booking-wizard">
            
            {/* Stepper Header */}
            <div className="stepper-header">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`step-indicator ${formStep >= step ? 'active' : ''}`}>
                  <div className="step-circle">{step}</div>
                  <div className="step-label">Step {step}</div>
                  {step < 4 && <div className="step-connector"></div>}
                </div>
              ))}
            </div>

            {/* STEP 1: Select Service/Doctor */}
            {formStep === 1 && (
              <div className="step-content">
                <h3 className="step-title">Select a Service</h3>
                <div className="dept-grid">
                  {DEPARTMENTS.map(dept => (
                    <div key={dept.id} className="dept-card" onClick={() => handleSelectDept(dept)}>
                      <span className="dept-icon">{dept.icon}</span>
                      <h4>{dept.name}</h4>
                      <p>{dept.doctor}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Date & Time (Mimicking Screenshot) */}
            {formStep === 2 && (
              <div className="step-content">
                <div className="doctor-profile-card">
                  <div className="doctor-avatar">
                    <User size={32} color="#0F5C5E" />
                  </div>
                  <h4 className="doctor-name">{formData.doctor || 'Dr. Manu Sharma'}</h4>
                  <p className="doctor-title">{formData.doctorTitle || 'Neonatologist'}</p>
                </div>

                <div className="schedule-info">
                  <h5 className="schedule-title">Working Days</h5>
                  <p className="schedule-text">Morning: Mon/Tue/Wed/Thu/Fri/Sat/Sun</p>
                  <p className="schedule-text">Evening: Mon/Tue/Wed/Thu/Fri/Sat</p>
                </div>

                <div className="date-selection-area">
                  <p className="selected-day">Selected Day: <strong>{getSelectedDayName()}</strong></p>
                  <p className="date-format-hint">Date Format: MM/DD/YYYY</p>
                  
                  <div className="date-time-row">
                    <div className="custom-date-input">
                      <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <div className="calendar-btn">
                        <Calendar size={18} color="white" />
                      </div>
                    </div>
                    
                    <div className="time-selection">
                      <span className="select-label">Select:</span>
                      <div className="time-pills-container">
                        {TIME_SLOTS_MORNING.map(time => (
                          <button 
                            key={time} 
                            className={`docterz-time-pill ${formData.time === time ? 'selected' : ''}`}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </button>
                        ))}
                        {TIME_SLOTS_EVENING.map(time => (
                          <button 
                            key={time} 
                            className={`docterz-time-pill ${formData.time === time ? 'selected' : ''}`}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {errors.time && <span className="error-text">{errors.time}</span>}
                </div>

                <div className="step-actions">
                  <button className="btn btn-secondary" onClick={() => setFormStep(1)}>Back</button>
                  <button className="btn btn-primary btn-proceed" onClick={handleNextToStep3}>Proceed</button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Info */}
            {formStep === 3 && (
              <div className="step-content">
                <h3 className="step-title">Patient Details</h3>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group mt-3">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                <div className="form-group mt-3">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                
                <div className="step-actions">
                  <button className="btn btn-secondary" onClick={() => setFormStep(2)}>Back</button>
                  <button className="btn btn-primary btn-proceed" onClick={handleNextToStep4}>Proceed</button>
                </div>
              </div>
            )}

            {/* STEP 4: Confirm */}
            {formStep === 4 && (
              <div className="step-content">
                <h3 className="step-title">Confirm Appointment</h3>
                <div className="confirmation-summary">
                  <p><strong>Doctor:</strong> {formData.doctor}</p>
                  <p><strong>Service:</strong> {formData.department}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Patient:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>
                
                <div className="step-actions">
                  <button className="btn btn-secondary" onClick={() => setFormStep(3)}>Back</button>
                  <button className="btn btn-primary btn-proceed" onClick={handleSubmit}>Confirm Booking</button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Contact Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-header">
              <h4>Contact Us</h4>
              <p className="contact-subtitle">We're here to help you</p>
            </div>
            
            <div className="sidebar-scroll-content">
              <div className="clinic-gallery-wrapper">
                <div className="clinic-gallery">
                  <button className="gallery-nav prev"><ChevronLeft size={24} color="white" /></button>
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Clinic Interior" />
                  <button className="gallery-nav next"><ChevronRight size={24} color="white" /></button>
                  <div className="gallery-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>

              <div className="contact-cards-container">
                <div className="contact-card">
                  <div className="icon-wrapper bg-soft-teal">
                    <MapPin size={20} color="#003B40" />
                  </div>
                  <div className="contact-card-content">
                    <h5 className="clinic-name">Chikitssa Arogyaa</h5>
                    <p className="clinic-desc">A complete mother and child clinic</p>
                    <p className="clinic-address">House No 1048, Sector - 37 B, Chandigarh, India, 160036</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-wrapper bg-soft-blue">
                    <Phone size={20} color="#4A90E2" />
                  </div>
                  <div className="contact-card-content">
                    <h5 className="clinic-name">Call Us</h5>
                    <p className="contact-number">+91 99151 61048</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}

      {stage === 'success' && (
        <div className="success-container animate-fade-up">
          <div className="success-icon-wrapper">
            <CheckCircle size={64} className="success-icon" />
          </div>
          <h2>Booking Confirmed!</h2>
          <p>Thank you, {formData.name}. Your appointment for <strong>{formData.department}</strong> on <strong>{formData.date} at {formData.time}</strong> has been received.</p>
          <button className="btn btn-outline mt-4" onClick={onClose}>Return to Homepage</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentModal;
