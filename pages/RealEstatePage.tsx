

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconLeaf = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconBolt = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const IconDroplet = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.836 0 8.75-3.914 8.75-8.75S16.836 4.25 12 4.25 3.25 8.164 3.25 13c0 4.836 3.914 8.75 8.75 8.75z" /></svg>;

// --- New/Updated Icons for Redesigned Sections ---
const IconDesign = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>;
const IconFunctionality = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconIntegration = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0019.5 3h-15A2.25 2.25 0 002.25 5.25v18zm11.25-18v18" /></svg>;
const IconSmartHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1M3 7.5l3 1m18 0l-3-1m-15 0l-3 1m15-6.5l-3 1.125" /></svg>;
const IconPark = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-2.43.95-5.035-.116-6.48-2.232-1.445-2.116-1.59-4.942-.35-7.232l5.53-9.955a.75.75 0 011.51 0l5.53 9.955c1.24 2.29 1.095 5.116-.35 7.232-1.445 2.116-4.05 3.182-6.48 2.232z" /></svg>;
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;


// --- Page Sections ---

const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();

    const features = [
        { icon: <IconDesign />, titleKey: 'reIntroFeature1Title', descKey: 'reIntroFeature1Desc' },
        { icon: <IconFunctionality />, titleKey: 'reIntroFeature2Title', descKey: 'reIntroFeature2Desc' },
        { icon: <IconIntegration />, titleKey: 'reIntroFeature3Title', descKey: 'reIntroFeature3Desc' },
    ];

    return (
        <div className="container mx-auto px-6 py-16 md:py-0">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans text-brand-navy mb-6">{t('reIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-8">{t('reIntroText')}</p>
                    
                    <div className="space-y-6 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0">{feature.icon}</div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold text-brand-dark">{t(feature.titleKey)}</h3>
                                    <p className="text-brand-text-gray mt-1 text-sm leading-relaxed">{t(feature.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-white border border-gray-200 text-brand-text-gray font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md hover:border-brand-primary/50">{t('reIntroTypeResidential')}</span>
                        <span className="bg-white border border-gray-200 text-brand-text-gray font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md hover:border-brand-primary/50">{t('reIntroTypeCommercial')}</span>
                        <span className="bg-white border border-gray-200 text-brand-text-gray font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md hover:border-brand-primary/50">{t('reIntroTypeMixedUse')}</span>
                    </div>
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                    <img src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern architectural home" className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
            </div>
        </div>
    );
};

const PortfolioSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: 'https://socabeg.com/images/balena.jpg', titleKey: 'program1Title', descKey: 'program1Desc', featuresKey: 'reProjectBalenaFeatures' },
        { image: 'https://socabeg.com/images/hlm.jpg', titleKey: 'program2Title', descKey: 'program2Desc', featuresKey: 'reProjectHlmFeatures' },
        { image: 'https://socabeg.com/images/lac.jpg', titleKey: 'program3Title', descKey: 'program3Desc', featuresKey: 'reProjectNiagueFeatures' },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('rePortfolioTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed">{t('rePortfolioSubtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(p => (
                    <div key={p.titleKey} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover" loading="lazy" width="400" height="224" />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-brand-primary mb-2">{t(p.titleKey)}</h3>
                            <p className="text-brand-text text-sm mb-4 flex-grow">{t(p.descKey)}</p>
                            <div className="mt-auto border-t pt-4">
                                <h4 className="font-semibold text-sm text-brand-dark mb-2">Caractéristiques Clés :</h4>
                                <p className="text-xs text-gray-600">{t(p.featuresKey)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SustainabilitySection: React.FC = () => {
    const { t } = useLocalization();
    const points = [
        { icon: <IconLeaf />, titleKey: 'reSustainabilityPoint1Title', descKey: 'reSustainabilityPoint1Desc' },
        { icon: <IconBolt />, titleKey: 'reSustainabilityPoint2Title', descKey: 'reSustainabilityPoint2Desc' },
        { icon: <IconDroplet />, titleKey: 'reSustainabilityPoint3Title', descKey: 'reSustainabilityPoint3Desc' },
    ];
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
                 <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Eco-friendly building" className="rounded-lg shadow-xl w-full" loading="lazy" width="576" height="384" />
            </div>
            <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('reSustainabilityTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed mb-8">{t('reSustainabilityText')}</p>
                <div className="space-y-6">
                    {points.map(p => (
                        <div key={p.titleKey} className="flex items-start">
                            <div className="flex-shrink-0">{p.icon}</div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-brand-primary">{t(p.titleKey)}</h3>
                                <p className="text-brand-text mt-1">{t(p.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AmenitiesSection: React.FC = () => {
    const { t } = useLocalization();
    const amenities = [
        { icon: <IconSmartHome />, titleKey: 'reAmenity1Title', descKey: 'reAmenity1Desc' },
        { icon: <IconPark />, titleKey: 'reAmenity2Title', descKey: 'reAmenity2Desc' },
        { icon: <IconShield />, titleKey: 'reAmenity3Title', descKey: 'reAmenity3Desc' },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-navy mb-4">{t('reAmenitiesTitle')}</h2>
                <p className="text-lg text-brand-text-gray leading-relaxed">{t('reAmenitiesText')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {amenities.map((amenity, index) => (
                    <div
                        key={amenity.titleKey}
                        className="bg-white p-8 rounded-xl shadow-soft text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${150 * (index + 1)}ms` }}
                    >
                        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary/10 group-hover:scale-110">
                            {amenity.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t(amenity.titleKey)}</h3>
                        <p className="text-sm text-brand-text-gray leading-relaxed">{t(amenity.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    const testimonials = [
        { quoteKey: "testimonial3Quote", nameKey: "testimonial3Name" },
        { quoteKey: "testimonial4Quote", nameKey: "testimonial4Name" },
        { quoteKey: "testimonial1Quote", nameKey: "testimonial1Name" },
        { quoteKey: "testimonial5Quote", nameKey: "testimonial5Name" }
    ];

    const chunk = <T,>(arr: T[], size: number): T[][] =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
    );
    
    const testimonialPairs = chunk(testimonials, 2);
    const numSlides = testimonialPairs.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = useCallback(() => { if (timeoutRef.current) { clearTimeout(timeoutRef.current); } }, []);
    
    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === numSlides - 1 ? 0 : prev + 1));
    }, [numSlides]);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(goNext, 5000);
        return () => { resetTimeout(); };
    }, [currentIndex, goNext, resetTimeout]);

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('reTestimonialsTitle')}</h2>
            </div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialPairs.map((pair, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 px-2 md:px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {pair.map((testimonial, testimonialIndex) => (
                                        <div key={testimonialIndex} className="bg-white px-8 py-4 md:px-10 md:py-6 rounded-lg shadow-sm text-center h-[400px] md:h-[340px] flex flex-col justify-center">
                                            <div>
                                              <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h3l2-4V7H4v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path></svg>
                                              <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">“{t(testimonial.quoteKey)}”</blockquote>
                                            </div>
                                            <cite className="not-italic font-semibold text-brand-primary font-sans">— {t(testimonial.nameKey)}</cite>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('prevTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('nextTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

const MarketInsightSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern interior design" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('reMarketTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed">{t('reMarketText')}</p>
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-sans text-brand-dark mb-4">{t('reCtaTitle')}</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto mb-8">{t('reCtaText')}</p>
            <Link to="/contact" className="bg-brand-secondary text-brand-dark text-lg font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300 inline-block transform hover:scale-105">
                {t('reCtaButton')}
            </Link>
        </div>
    );
};

const RealEstatePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><IntroductionSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><PortfolioSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><SustainabilitySection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><AmenitiesSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><TestimonialsSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><MarketInsightSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20"><CtaSection /></FullScreenSection>
      <Footer />
    </>
  );
};

export default RealEstatePage;