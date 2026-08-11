import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The care and attention my child received here was exceptional. Dr. Shefali is very patient and explains everything clearly. Highly recommend for any parents.",
      author: "Priya Sharma"
    },
    {
      id: 2,
      text: "A truly premium healthcare experience. From the beautiful environment to the expert doctors, every visit has been comforting. Dr. Manu was wonderful during my entire pregnancy.",
      author: "Neha Verma"
    },
    {
      id: 3,
      text: "The new Child Development Centre is fantastic. The staff is so well-trained and they really know how to connect with the kids. We've seen great progress.",
      author: "Amit Singh"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto advance
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <span className="subheading">Patient Stories</span>
          <h2>Trusted by Families</h2>
        </div>

        <div className="testimonial-carousel animate-fade-up delay-200">
          <Quote className="quote-icon" size={48} />
          
          <div className="testimonial-content">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--color-premium)" color="var(--color-premium)" />
              ))}
            </div>
            
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            
            <h5 className="testimonial-author">{testimonials[currentIndex].author}</h5>
          </div>

          <div className="carousel-controls">
            <button className="control-btn" onClick={prevTestimonial} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <div className="dots">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
