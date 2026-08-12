import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import clinicVideo from '../../assets/video_2026-08-11_12-31-26.mp4';
import './ClinicVideo.css';

const ClinicVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCollage = [
    {
      id: 1,
      title: "Clinic Tour & Overview",
      subtitle: "Step inside our Sector 37-B facility",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: clinicVideo
    },
    {
      id: 2,
      title: "Pediatric Care Suite",
      subtitle: "Specialized care for infants & kids",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: clinicVideo
    },
    {
      id: 3,
      title: "Child Development Centre",
      subtitle: "Nurturing growth & early therapy",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: clinicVideo
    },
    {
      id: 4,
      title: "Mother & Newborn Care",
      subtitle: "Expert obstetrics & neonatal support",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: clinicVideo
    }
  ];

  return (
    <section className="section clinic-video-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">— CLINIC TOUR —</span>
          <h2>Explore Chikitssa Arogyaa</h2>
        </div>

        {/* 4-Video Collage Grid */}
        <div className="video-collage-grid">
          {videoCollage.map((item) => (
            <div 
              key={item.id} 
              className="video-collage-card animate-fade-up"
              onClick={() => setSelectedVideo(item)}
            >
              <div className="video-collage-thumb-wrap">
                <img src={item.image} alt={item.title} className="video-collage-img" />
                <div className="video-collage-overlay">
                  <div className="play-icon-small">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="video-collage-info">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal active">
          <div className="video-modal-backdrop" onClick={() => setSelectedVideo(null)}></div>
          <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>
            <X size={28} />
          </button>
          <div className="video-modal-content">
            <div className="video-responsive">
              <video 
                width="100%" 
                height="100%" 
                controls 
                autoPlay 
                playsInline
                src={selectedVideo.videoUrl} 
                className="clinic-video-player"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 'var(--radius-lg)' }}
              ></video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClinicVideo;
