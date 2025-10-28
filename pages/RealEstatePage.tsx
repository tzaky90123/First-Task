

import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import HeroSection from '../components/HeroSection';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconLeaf = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconBolt = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const IconDroplet = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c4.836 0 8.75-3.914 8.75-8.75S16.836 4.25 12 4.25 3.25 8.164 3.25 13c0 4.836 3.914 8.75 8.75 8.75z" /></svg>;
const IconSmartHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1M3 7.5l3 1m18 0l-3-1m-15 0l-3 1m15-6.5l-3 1.125" /></svg>;
const IconPark = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-3.5-3.5 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.239-4.261-9.5-9.5-9.5S.5 6.761.5 12s4.261 9.5 9.5 9.5 9.5-4.239 9.5-9.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12a6 6 0 01-6 6" /></svg>;
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;

// --- Page Sections ---

const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('reIntroTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed mb-6">{t('reIntroText')}</p>
                <div className="flex flex-wrap gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary font-semibold px-4 py-2 rounded-full text-sm">{t('reIntroTypeResidential')}</span>
                    <span className="bg-brand-primary/10 text-brand-primary font-semibold px-4 py-2 rounded-full text-sm">{t('reIntroTypeCommercial')}</span>
                    <span className="bg-brand-primary/10 text-brand-primary font-semibold px-4 py-2 rounded-full text-sm">{t('reIntroTypeMixedUse')}</span>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern real estate" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
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
                        <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover" />
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
                 <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Eco-friendly building" className="rounded-lg shadow-xl w-full"/>
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
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('reAmenitiesTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed">{t('reAmenitiesText')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {amenities.map(a => (
                     <div key={a.titleKey} className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="mx-auto mb-4">{a.icon}</div>
                        <h3 className="text-xl font-bold text-brand-primary mb-2">{t(a.titleKey)}</h3>
                        <p className="text-brand-text text-sm">{t(a.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    const testimonials = [
        { quoteKey: "testimonial3Quote", nameKey: "testimonial3Name" }, { quoteKey: "testimonial4Quote", nameKey: "testimonial4Name" },
        { quoteKey: "testimonial1Quote", nameKey: "testimonial1Name" }, { quoteKey: "testimonial5Quote", nameKey: "testimonial5Name" }
    ];
    const chunk = <T,>(arr: T[], size: number): T[][] => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
    const testimonialPairs = chunk(testimonials, 2);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = useCallback(() => setCurrentIndex((prev) => (prev === testimonialPairs.length - 1 ? 0 : prev + 1)), [testimonialPairs.length]);
    useEffect(() => { const interval = setInterval(goNext, 5000); return () => clearInterval(interval); }, [goNext]);

    return (
        <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('reTestimonialsTitle')}</h2>
            <div className="overflow-hidden relative">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonialPairs.map((pair, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {pair.map((testimonial, testimonialIndex) => (
                                    <div key={testimonialIndex} className="bg-brand-light p-8 rounded-lg shadow-sm">
                                        <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">“{t(testimonial.quoteKey)}”</blockquote>
                                        <cite className="not-italic font-semibold text-brand-primary font-sans">— {t(testimonial.nameKey)}</cite>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MarketInsightSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern interior design" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
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
    <SmoothScrollLayout>
      <HeroSection />
      <FullScreenSection className="bg-white py-16 md:py-20"><IntroductionSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><PortfolioSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><SustainabilitySection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><AmenitiesSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><TestimonialsSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><MarketInsightSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20"><CtaSection /></FullScreenSection>
      <Footer />
    </SmoothScrollLayout>
  );
};

export default RealEstatePage;