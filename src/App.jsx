import React, { useState } from 'react';

// Layout shell components (reusable across pages)
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page sections (used only here as shell wrappers)
import Hero from './sections/Hero/Hero';

// Global utilities & overlays
import AppointmentModal from './components/AppointmentModal/AppointmentModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import StickyActions from './components/StickyActions/StickyActions';

// Pages
import HomePage from './pages/HomePage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      {/* Layout Shell */}
      <Navbar onBookAppointment={openModal} />
      <Hero onBookAppointment={openModal} />

      {/* Page Content */}
      <HomePage onBookAppointment={openModal} />

      {/* Layout Shell */}
      <Footer />

      {/* Global Utilities & Overlays */}
      {isModalOpen && <AppointmentModal onClose={closeModal} />}
      {!isModalOpen && <ScrollToTop />}
      <StickyActions onBookAppointment={openModal} />
    </div>
  );
}

export default App;

