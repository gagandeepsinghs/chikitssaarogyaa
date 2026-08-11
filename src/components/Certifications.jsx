import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: 1,
      title: "Excellence in Paediatrics",
      doctor: "Dr. Shefali",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Advanced IVF Certification",
      doctor: "Dr. Manu",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section cert-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Achievements</span>
          <h2>Expertise You Can Trust</h2>
        </div>

        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={cert.id} className="cert-card animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="cert-icon">
                <Award size={32} />
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p>{cert.doctor}</p>
                <button className="btn-outline cert-btn" onClick={() => setSelectedCert(cert)}>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal active">
          <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}></div>
          <div className="cert-modal-content">
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={24} />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
            <div className="cert-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.doctor}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
