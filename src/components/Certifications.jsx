import React, { useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const certs = [
    {
      id: 1,
      title: "Fellowship in Neonatology",
      desc: "Dr. Manu Sharma — Fellowship certification in Neonatology.",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/cer1.jpg",
      pdf: "https://chikitssaarogyaa.com/newdesign/assets/img/Dr-Manu-Sharma-fellowship-in-Neonatology.pdf"
    },
    {
      id: 2,
      title: "CPD Certificate",
      desc: "Dr. Manu Sharma — Continuing Professional Development certificate.",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/cer2.jpg",
      pdf: "https://chikitssaarogyaa.com/newdesign/assets/img/Dr-Manu-Sharma-CPD-Certificate.pdf"
    },
    {
      id: 3,
      title: "Most Trusted Doctor Award",
      desc: "Recognized for excellence in patient care and medical expertise.",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/slide/awarded-trusted-doctor.jpg",
      pdf: "https://chikitssaarogyaa.com/newdesign/assets/img/Dr-Manu-Sharma-fellowship-in-Neonatology.pdf"
    },
    {
      id: 4,
      title: "Sushruta Award Winner",
      desc: "Honored for outstanding contributions to gynecology and obstetrics.",
      image: "https://chikitssaarogyaa.com/newdesign/assets/img/slide/sushutra-award.jpg",
      pdf: "https://chikitssaarogyaa.com/newdesign/assets/img/Dr-Manu-Sharma-CPD-Certificate.pdf"
    }
  ];

  const visibleCerts = showAll ? certs : certs.slice(0, 2);

  return (
    <section className="cert-section py-5 bg-[#fafbf9]">
      <div className="container py-4 text-center">
        <div className="section-title mb-5">
          <span className="cert-subheading">— RECOGNITION —</span>
          <h2 className="cert-title">Achievements &amp; Certifications</h2>
          <p className="cert-desc">
            Explore our awards and professional certifications that reflect Chikitssa Clinic’s
            commitment to trusted mother, child and family care.
          </p>
        </div>

        <div className="cert-grid">
          {visibleCerts.map((cert) => (
            <div key={cert.id} className="cert-card" onClick={() => setSelectedCert(cert)}>
              <div className="cert-media">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <span className="cert-badge">
                  <Search size={14} strokeWidth={2.5} />
                  <span>View</span>
                </span>
              </div>
              <div className="cert-body">
                <h5 className="cert-card-title">{cert.title}</h5>
                <p className="cert-card-desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button 
            className="cert-view-all-btn"
            onClick={() => setShowAll(prev => !prev)}
          >
            {showAll ? 'Show Less' : 'View All Certificates'}
          </button>
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      {selectedCert && (
        <div className="cert-lightbox">
          <div className="cert-lightbox-backdrop" onClick={() => setSelectedCert(null)}></div>
          <div className="cert-lightbox-dialog">
            <div className="cert-lightbox-header">
              <h5 className="cert-lightbox-title">{selectedCert.title}</h5>
              <div className="cert-lightbox-actions">
                <a 
                  href={selectedCert.pdf} 
                  className="cert-lightbox-pdf-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  <span>Open PDF</span>
                </a>
                <button 
                  type="button" 
                  className="cert-lightbox-close" 
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="cert-lightbox-body">
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-lightbox-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
