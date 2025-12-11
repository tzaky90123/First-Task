
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ValuesSection from '../components/ValuesSection';

// --- Local Components for Specific Sections ---

const PartnersSection: React.FC = () => {
    const { t } = useLocalization();
    const partnerLogos = [
        'https://socabeg.com/partners/bhs.png',
        'https://socabeg.com/partners/geoplast.png',
        'https://socabeg.com/partners/ipres.jpg',
        'https://socabeg.com/partners/sar.png',
        'https://socabeg.com/partners/sgs.png',
        'https://socabeg.com/partners/sicap.jpg',
        'https://socabeg.com/partners/sn.jpg',
        'https://socabeg.com/partners/snhlm.jpg',
        'https://socabeg.com/partners/sonatel.png',
    ];

    const row1Logos = partnerLogos.slice(0, 5);
    const row2Logos = partnerLogos.slice(5);

    return (
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" />
             <div className="flex flex-col items-center gap-y-10 md:gap-y-14 mt-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110">
                            <img 
                                src={logo} 
                                alt={t('partnerLogoAlt').replace('{number}', String(index + 1))} 
                                className="max-h-16 md:max-h-20 w-auto object-contain" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110">
                            <img 
                                src={logo} 
                                alt={t('partnerLogoAlt').replace('{number}', String(index + 1 + row1Logos.length))} 
                                className="max-h-16 md:max-h-20 w-auto object-contain" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutCtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center scroll-element flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 uppercase tracking-tight">
                {t('aboutCtaTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-brand-text-gray mb-10 font-light max-w-3xl">
                {t('aboutCtaSubtitle')}
            </p>
            <Link to="/contact" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                {t('homeContactCtaButton')}
            </Link>
        </div>
    );
};

// --- Main About Page Component ---

const AboutPage: React.FC = () => {
  const { t } = useLocalization();
  
  // Updated configuration for About Page Hero with 3 slides
  const aboutSlides = [
    {
        img: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'aboutHeroSlide1Title',
        subtitle: 'aboutHeroSlide1Subtitle',
    },
    {
        img: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'aboutHeroSlide2Title',
        subtitle: 'aboutHeroSlide2Subtitle',
    },
    {
        img: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'aboutHeroSlide3Title',
        subtitle: 'aboutHeroSlide3Subtitle',
    }
  ];

  const aboutCta = {
      link: '#history',
      textKey: 'aboutHeroCta'
  };

  return (
    <>
      {/* 1. Hero with slides */}
      <HeroSection 
          slides={aboutSlides}
          cta={aboutCta}
      />
      
      {/* 2. Company Overview */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <div id="history"> {/* Anchor for the CTA */}
            <AboutSection />
        </div>
      </FullScreenSection>

      {/* 3. Values */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <ValuesSection />
      </FullScreenSection>

      {/* 4. Partners */}
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <PartnersSection />
      </FullScreenSection>

      {/* 5. CTA Section */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <AboutCtaSection />
      </FullScreenSection>

      <Footer />
    </>
  );
};

export default AboutPage;
