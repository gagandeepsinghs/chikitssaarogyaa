import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './Doctors.css';

const Doctors = ({ onBookAppointment }) => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Shefali",
      specialisation: "Senior Paediatrician",
      qualification: "MBBS, MD (Paediatrics)",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Expert in newborn care, vaccinations, and childhood illnesses with over 15 years of experience."
    },
    {
      id: 2,
      name: "Dr. Manu",
      specialisation: "Senior Gynaecologist & IVF Specialist",
      qualification: "MBBS, MD (Obs & Gynae)",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Specialised in high-risk pregnancies, infertility treatments, and women's wellness."
    }
  ];

  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Our Specialists</span>
          <h2>Meet Our Doctors</h2>
          <p className="doctors-intro">
            Our highly experienced and compassionate doctors are dedicated to providing the best healthcare for your family.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={doctor.id} className="doctor-card animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-spec">{doctor.specialisation}</p>
                <p className="doctor-qual">{doctor.qualification}</p>
                <p className="doctor-bio">{doctor.bio}</p>
                <div className="doctor-actions">
                  <a href="#" className="btn-outline doctor-btn-view">View Profile</a>
                  <button className="btn-primary doctor-btn-book" onClick={onBookAppointment}>
                    <Calendar size={16} /> Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
