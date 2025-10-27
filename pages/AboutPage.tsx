

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';
import AboutSection from '../components/AboutSection';
import SectionLogoIcon from '../components/SectionLogoIcon';

const slides = [
  {
    img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide1Title',
    subtitle: 'heroSlide1Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide2Title',
    subtitle: 'heroSlide2Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide3Title',
    subtitle: 'heroSlide3Subtitle',
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLocalization();
  const slideInterval = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    slideInterval.current = window.setInterval(nextSlide, 7000);
    return () => {
      if (slideInterval.current) window.clearInterval(slideInterval.current);
    };
  }, [nextSlide]);

  const handleManualNavigation = (action: () => void) => {
    action();
    if (slideInterval.current) {
        clearInterval(slideInterval.current);
        slideInterval.current = window.setInterval(nextSlide, 7000);
    }
  }

  const goToSlide = (index: number) => {
      handleManualNavigation(() => setCurrentSlide(index));
  };
    
  return (
    <section className="relative h-screen text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Slide Navigation Buttons */}
      <button 
        onClick={() => handleManualNavigation(prevSlide)} 
        className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={() => handleManualNavigation(nextSlide)} 
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>


      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center container mx-auto px-6">
          <div>
              {slides.map((slide, index) => (
                  <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
                      <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 animate-fade-in-up whitespace-nowrap">
                        {t(slide.title)}
                      </h1>
                      <p className="text-base md:text-lg mb-8 animate-fade-in-up animation-delay-300 max-w-5xl mx-auto">
                        {t(slide.subtitle)}
                      </p>
                  </div>
              ))}
              <Link
                to="/promotion-immobiliere"
                className="bg-transparent border-2 border-white text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-brand-dark transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600"
              >
                {t('homeCta')}
              </Link>
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
              {slides.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className="relative w-6 h-1 rounded-full bg-white/50 hover:bg-white transition-colors" aria-label={`Go to slide ${index + 1}`}>
                       <div
                          className={`h-full rounded-full bg-white transition-all duration-200 ${index === currentSlide ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                      ></div>
                      {index === currentSlide && (
                          <div
                              key={currentSlide} // Re-trigger animation on slide change
                              className="absolute top-0 left-0 h-full rounded-full bg-white animate-slide-indicator"
                              style={{ animationDuration: '7s' }}
                          ></div>
                      )}
                  </button>
              ))}
          </div>

          <div className="absolute bottom-4 w-full">
            <MainNavigation />
          </div>
      </div>
    </section>
  );
};

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
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('partnersSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('partnersSectionHeadline')}</h2>
            </div>
             <div className="space-y-8 md:space-y-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1 + row1Logos.length}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ValuesSection: React.FC = () => {
  const { t } = useLocalization();

  const values = [
    { titleKey: "value1Title", descriptionKey: "value1Desc", icon: "https://cdn-icons-png.flaticon.com/512/506/506420.png" },
    { titleKey: "value2Title", descriptionKey: "value2Desc", icon: "https://cdn-icons-png.flaticon.com/512/100/100852.png" },
    { titleKey: "value3Title", descriptionKey: "value3Desc", icon: "https://cdn-icons-png.flaticon.com/512/5631/5631194.png" },
    { titleKey: "value4Title", descriptionKey: "value4Desc", icon: "https://cdn-icons-png.flaticon.com/512/10556/10556522.png" },
    { titleKey: "value5Title", descriptionKey: "value5Desc", icon: "https://cdn-icons-png.flaticon.com/512/798/798008.png" },
    { titleKey: "value6Title", descriptionKey: "value6Desc", icon: "https://cdn-icons-png.flaticon.com/512/33/33308.png" },
  ];

  return (
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
            <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
            <span>{t("whyChooseUsSectionTitle")}</span>
          </h3>
          <h2 className="text-2xl font-bold font-sans text-black">{t("whyChooseUsSectionHeadline")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl">
              {value.icon && (<img src={value.icon} alt="" className="h-10 w-10 mb-4" />)}
              <div>
                <h3 className="text-xl font-medium text-brand-primary mb-2 font-sans">{t(value.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(value.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};


const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <SmoothScrollLayout>
      <HeroSection />
      
      <FullScreenSection>
        <AboutSection showLearnMoreButton={false} />
      </FullScreenSection>

      <FullScreenSection className="bg-white py-16 md:py-20">
        <PartnersSection />
      </FullScreenSection>

      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ValuesSection />
      </FullScreenSection>

      <Footer />
    </SmoothScrollLayout>
  );
};

export default AboutPage;
