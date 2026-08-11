import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import './ClinicVideo.css';

const ClinicVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="section clinic-video-section">
      <div className="container">
        <div className="video-card animate-fade-up">
          <div className="video-thumbnail-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Inside Chikitssa Arogyaa" 
              className="video-thumbnail"
            />
            <div className="video-overlay">
              <h2>Step Inside Chikitssa Arogyaa</h2>
              <button 
                className="play-btn" 
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play video"
              >
                <div className="play-icon-wrapper">
                  <Play size={32} fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal active">
          <div className="video-modal-backdrop" onClick={() => setIsVideoOpen(false)}></div>
          <button className="video-modal-close" onClick={() => setIsVideoOpen(false)}>
            <X size={32} />
          </button>
          <div className="video-modal-content">
            <div className="video-responsive">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Clinic Video Placeholder" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClinicVideo;
