
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import FullScreenSection from '../components/FullScreenSection';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ValuesSection from '../components/ValuesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

// --- Helper Components ---

const ExpertiseSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
      { 
        titleKey: "homeServicesBtpTitle", 
        textKey: "homeServicesBtpText", 
        icon: "https://cdn-icons-png.flaticon.com/512/798/798008.png"
      },
      { 
        titleKey: "homeServicesReTitle", 
        textKey: "homeServicesReText", 
        icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png"
      },
      { 
        titleKey: "homeServicesMinesTitle", 
        textKey: "homeServicesMinesText", 
        icon: "https://cdn-icons-png.flaticon.com/512/522/522510.png"
      },
    ];
  
    return (
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
          <SectionTitle subtitleKey="homeServicesTitle" titleKey="homeExpertiseSubtitle" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-center h-full border-b-4 border-transparent hover:border-brand-secondary group">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-light rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-navy transition-colors duration-300">
                    <img src={service.icon} alt={t(service.titleKey)} className="h-8 w-8 opacity-80 group-hover:opacity-100 group-hover:invert transition-all duration-300" width="32" height="32" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-sans uppercase tracking-wide">{t(service.titleKey)}</h3>
                <p className="text-brand-text-gray text-base leading-relaxed">{t(service.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" />
             <div className="flex flex-col items-center gap-y-10 md:gap-y-14 mt-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110 w-24 md:w-auto">
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
                        <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110 w-24 md:w-auto">
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

const MasterpiecesSection: React.FC = () => {
    const { t } = useLocalization();
    const [currentIndex, setCurrentIndex] = useState(0);

    const masterpieces = [
        {
            src: 'https://socabeg.com/images/btp.png',
            titleKey: 'masterpieceBtpTitle',
            descriptionKey: 'masterpieceBtpDesc'
        },
        {
            src: 'https://socabeg.com/images/mdlac2.jpg',
            titleKey: 'masterpieceReTitle',
            descriptionKey: 'masterpieceReDesc'
        },
        {
            src: 'https://socabeg.com/images/mines.png',
            titleKey: 'masterpieceMinesTitle',
            descriptionKey: 'masterpieceMinesDesc'
        }
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? masterpieces.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === masterpieces.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="homeMasterpiecesTitle" titleKey="homeMasterpiecesSubtitle" />

            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {masterpieces.map((masterpiece, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[500px]">
                        <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width="400" height="500" />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-80"></div>
                         <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-3xl font-bold mb-2">{t(masterpiece.titleKey)}</h3>
                            <p className="text-lg text-gray-200">{t(masterpiece.descriptionKey)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative w-full max-w-5xl mx-auto">
                <div className="overflow-hidden relative rounded-lg shadow-xl">
                    <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {masterpieces.map((masterpiece, index) => (
                            <div key={index} className="min-w-full h-[450px] relative">
                                <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" loading="lazy" width="500" height="450" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h3 className="text-2xl font-bold">{t(masterpiece.titleKey)}</h3>
                                    <p className="text-sm">{t(masterpiece.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-white/20 hover:bg-white hover:text-black backdrop-blur-sm rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition shadow-md" aria-label={t('masterpiecesPrev')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-white/20 hover:bg-white hover:text-black backdrop-blur-sm rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition shadow-md" aria-label={t('masterpiecesNext')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            
            <div className="text-center mt-12">
                 <Link to="/btp" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                    {t('homeMasterpiecesBtn')}
                 </Link>
            </div>
        </div>
    );
};

// --- Big CTA Section Component ---
const BigCtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center scroll-element flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 uppercase tracking-tight">
                {t('homeBigCtaTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-brand-text-gray mb-10 font-light max-w-3xl">
                {t('homeBigCtaSubtitle')}
            </p>
            <Link to="/contact" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                {t('homeBigCtaButton')}
            </Link>
        </div>
    );
};

// --- Main Page Component ---

const HomePage: React.FC = () => {
  // 6 boxes arranged as 3 boxes in the first row and 3 boxes in the second row.
  const homeValues = [
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/70/70535.png', 
        titleKey: 'homeValue1Title', 
        descKey: 'homeValue1Desc' 
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/807/807303.png', 
        titleKey: 'homeValue2Title', 
        descKey: 'homeValue2Desc' 
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/5631/5631194.png', 
        titleKey: 'homeValue3Title', 
        descKey: 'homeValue3Desc' 
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/60/60473.png', 
        titleKey: 'homeValue4Title', 
        descKey: 'homeValue4Desc' 
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/798/798008.png', 
        titleKey: 'homeValue5Title', 
        descKey: 'homeValue5Desc' 
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/33/33308.png', 
        titleKey: 'homeValue6Title', 
        descKey: 'homeValue6Desc' 
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. About Preview */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <AboutSection previewMode={true} />
      </FullScreenSection>

      {/* 3. Services Overview */}
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ExpertiseSection />
      </FullScreenSection>

      {/* 4. Why Choose Us (Values) */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <ValuesSection items={homeValues} />
      </FullScreenSection>

      {/* 5. Featured Projects */}
      <FullScreenSection className="grid-bg py-16 md:py-20">
        <MasterpiecesSection />
      </FullScreenSection>

      {/* 6. Testimonials Preview */}
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <TestimonialsSection />
      </FullScreenSection>

      {/* 7. Partners */}
      <FullScreenSection className="bg-white py-16 md:py-20">
        <PartnersSection />
      </FullScreenSection>

      {/* 8. Big CTA */}
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <BigCtaSection />
      </FullScreenSection>

      <Footer />
    </>
  );
};

export default HomePage;
