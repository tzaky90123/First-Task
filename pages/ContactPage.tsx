import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  // Define slides for the contact page hero, mirroring the construction page projects
  const contactSlides = [
    {
      img: 'https://images.pexels.com/photos/128830/pexels-photo-128830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'btpProject1Title',
      subtitle: 'btpProject1Desc',
    },
    {
      img: 'https://images.pexels.com/photos/2224797/pexels-photo-2224797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'btpProject2Title',
      subtitle: 'btpProject2Desc',
    },
    {
      img: 'https://images.pexels.com/photos/3773539/pexels-photo-3773539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'btpProject3Title',
      subtitle: 'btpProject3Desc',
    },
  ];

  // Define the CTA button to scroll to the contact form section
  const contactCta = {
      link: '#contact-form-section',
      textKey: 'homeContactCtaButton'
  };

  return (
    <>
      <HeroSection slides={contactSlides} cta={contactCta} />
      <div id="contact-form-section">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;