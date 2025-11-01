

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import FullScreenSection from '../components/FullScreenSection';
import SectionLogoIcon from '../components/SectionLogoIcon';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';

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
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                <span>{t('homeServicesTitle')}</span>
            </h3>
            <h2 className="text-2xl font-bold font-sans text-black max-w-3xl mx-auto">
                {t('homeExpertiseSubtitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-light p-6 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-lg flex flex-col justify-center">
                <img src={service.icon} alt={t(service.titleKey)} className="h-12 w-12 mx-auto mb-6 opacity-75" width="48" height="48" loading="lazy" />
                <h3 className="text-xl font-medium text-brand-primary mb-3 font-sans">{t(service.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(service.textKey)}</p>
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
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('partnersSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('partnersSectionHeadline')}</h2>
            </div>
             <div className="flex flex-col items-center gap-y-8 md:gap-y-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                                loading="lazy" height="80" width="160"
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
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                   <SectionLogoIcon className="inline-block h-5 w-auto mr-2"/>
                   <span>{t('homeMasterpiecesTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">
                    {t('homeMasterpiecesSubtitle')}
                </h2>
            </div>

            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {masterpieces.map((masterpiece, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[450px]">
                        <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="450" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-medium">{t(masterpiece.titleKey)}</h3>
                            <p className="text-sm opacity-90">{t(masterpiece.descriptionKey)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden relative w-full max-w-5xl mx-auto">
                <div className="overflow-hidden relative rounded-lg shadow-xl">
                    <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {masterpieces.map((masterpiece, index) => (
                            <div key={index} className="min-w-full h-[450px] sm:h-[500px] relative">
                                <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" loading="lazy" width="500" height="500" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                                    <h3 className="text-2xl font-medium">{t(masterpiece.titleKey)}</h3>
                                    <p className="text-sm">{t(masterpiece.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Previous image">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Next image">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

const IconBed = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const IconBath = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>;
const IconArea = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;
const IconLocation = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const ProgramSection: React.FC = () => {
    const { t } = useLocalization();
    const programs = [
        {
            image: 'https://socabeg.com/images/balena.jpg', titleKey: 'program1Title', typeKey: 'program1Type',
            details: [
                { icon: <IconBed />, textKey: 'program1Bedrooms' }, { icon: <IconBath />, textKey: 'program1Bathrooms' },
                { icon: <IconArea />, textKey: 'program1Area' }, { icon: <IconLocation />, textKey: 'program1Location' },
            ],
            descriptionKey: 'program1Desc', priceKey: 'program1Price',
        },
        {
            image: 'https://socabeg.com/images/hlm.jpg', titleKey: 'program2Title', typeKey: 'program2Type',
            details: [
                { icon: <IconBath />, textKey: 'program2Bathrooms' }, { icon: <IconArea />, textKey: 'program2Area' },
                { icon: <IconLocation />, textKey: 'program2Location' },
            ],
            descriptionKey: 'program2Desc', priceKey: 'program2Price',
        },
        {
            image: 'https://socabeg.com/images/lac.jpg', titleKey: 'program3Title', typeKey: 'program3Type',
            details: [
                { icon: <IconBed />, textKey: 'program3Bedrooms' }, { icon: <IconBath />, textKey: 'program3Bathrooms' },
                { icon: <IconArea />, textKey: 'program3Area' }, { icon: <IconLocation />, textKey: 'program3Location' },
            ],
            descriptionKey: 'program3Desc', priceKey: 'program3Price',
        },
    ];

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('programsSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('programsSectionHeadline')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <img src={program.image} alt={t(program.titleKey)} className="w-full h-56 object-cover" loading="lazy" width="400" height="224" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium text-brand-primary font-sans">{t(program.titleKey)}</h3>
                            <p className="text-xs text-gray-500 mb-3">{t(program.typeKey)}</p>
                            <div className="flex flex-wrap items-center text-xs text-gray-600 mb-4 border-y py-2">
                                {program.details.map((detail, i) => (<span key={i} className="flex items-center mr-4 mb-1">{detail.icon}{t(detail.textKey)}</span>))}
                            </div>
                            <p className="text-brand-text text-sm leading-relaxed mb-4 flex-grow">{t(program.descriptionKey)}</p>
                            <div className="mt-auto">
                                <p className="font-semibold text-brand-secondary text-sm mb-4">{t(program.priceKey)}</p>
                                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 text-sm">
                                    <Link to="#" className="w-full text-center px-4 py-2 rounded-full bg-brand-primary text-white font-semibold hover:bg-opacity-90 transition">{t('programDetailsButton')}</Link>
                                    <Link to="/contact" className="w-full text-center px-4 py-2 rounded-full bg-gray-200 text-brand-primary font-semibold hover:bg-gray-300 transition">{t('programContactButton')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// FIX: Added HomePage component and default export to resolve the module error.
// The incomplete Statistics section and its icons have been removed.
const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FullScreenSection className="bg-white py-16 md:py-20">
                <ExpertiseSection />
            </FullScreenSection>
            <FullScreenSection className="bg-gray-100 py-16 md:py-24">
                <AboutSection />
            </FullScreenSection>
            <FullScreenSection className="bg-brand-light py-16 md:py-20">
                <ProgramSection />
            </FullScreenSection>
            <FullScreenSection className="bg-white py-16 md:py-20">
                <MasterpiecesSection />
            </FullScreenSection>
            <FullScreenSection className="bg-brand-light py-16 md:py-20">
                <PartnersSection />
            </FullScreenSection>
            <Footer />
        </>
    );
};

export default HomePage;
