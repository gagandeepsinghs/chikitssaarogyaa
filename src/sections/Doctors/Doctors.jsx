import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './Doctors.css';

const Doctors = ({ onBookAppointment }) => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Manu Sharma",
      specialisation: "Consultant Pediatrician & Neonatologist",
      qualification: "MD (Pediatrics), Fellowship in Neonatology (IAP), PGPN (Boston, USA)",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/manusharma.webp",
      bio: "Expert in newborn care, vaccinations, neonatal intensive care, and childhood illnesses with extensive fellowship training."
    },
    {
      id: 2,
      name: "Dr. Shefali Sharma",
      specialisation: "Consultant Obstetrician & Gynaecologist, IVF Specialist",
      qualification: "MD (Obstetrics & Gynaecology), DNB, FRM Fellowship in Reproductive Medicine/IVF",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/drshefali.jpg",
      bio: "Specialised in high-risk pregnancies, infertility treatments, laparoscopic gynae surgery, and comprehensive women's wellness."
    }
  ];

  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Our Specialists</span>
          <h2>Our Doctors</h2>
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
