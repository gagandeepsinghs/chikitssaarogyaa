import React from 'react';

// Page sections
import TrustStrip from '../sections/TrustStrip/TrustStrip';
import About from '../sections/About/About';
import Specialities from '../sections/Specialities/Specialities';
import WhyChooseUs from '../sections/WhyChooseUs/WhyChooseUs';
import Doctors from '../sections/Doctors/Doctors';
import ChildDevelopment from '../sections/ChildDevelopment/ChildDevelopment';
import Certifications from '../sections/Certifications/Certifications';
import Testimonials from '../sections/Testimonials/Testimonials';
import ClinicVideo from '../sections/ClinicVideo/ClinicVideo';
import Contact from '../sections/Contact/Contact';

const HomePage = ({ onBookAppointment }) => {
  return (
    <main>
      <TrustStrip />
      <About />
      <Specialities />
      <WhyChooseUs />
      <Doctors onBookAppointment={onBookAppointment} />
      <ChildDevelopment />
      <Certifications />
      <Testimonials />
      <ClinicVideo />
      <Contact />
    </main>
  );
};

export default HomePage;

