import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  // Define a single, static slide for the contact page hero
  const contactSlides = [
    {
      img: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'contactHeroTitle',
      subtitle: 'contactHeroSubtitle',
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