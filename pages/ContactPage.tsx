import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  // Define slides for the contact page hero, with new construction-themed images
  const contactSlides = [
    {
      img: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'contactHeroTitle1',
      subtitle: 'contactHeroSubtitle',
    },
    {
      img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'contactHeroTitle2',
      subtitle: 'homeContactCtaText',
    },
    {
      img: 'https://images.pexels.com/photos/7218568/pexels-photo-7218568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'contactHeroTitle3',
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