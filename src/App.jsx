import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Specialities from './components/Specialities';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import ChildDevelopment from './components/ChildDevelopment';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import ClinicVideo from './components/ClinicVideo';
import AppointmentModal from './components/AppointmentModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <Navbar onBookAppointment={openModal} />
      <Hero onBookAppointment={openModal} />
      <TrustStrip />
      <About />
      <Specialities />
      <WhyChooseUs />
      <Doctors onBookAppointment={openModal} />
      <ChildDevelopment />
      <Timeline />
      <Certifications />
      <Testimonials />
      <ClinicVideo />
      <Contact />
      <Footer />
      
      {isModalOpen && <AppointmentModal onClose={closeModal} />}
      {!isModalOpen && <Chatbot />}
      {!isModalOpen && <ScrollToTop />}
    </div>
  );
}

export default App;
