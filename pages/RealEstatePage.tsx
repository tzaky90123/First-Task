
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

// --- New/Updated Icons for Redesigned Sections ---
const IconDesign = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>;
const IconFunctionality = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconIntegration = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0019.5 3h-15A2.25 2.25 0 002.25 5.25v18zm11.25-18v18" /></svg>;


// --- Page Sections ---

const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();

    const features = [
        { icon: <IconDesign />, titleKey: 'reIntroFeature1Title', descKey: 'reIntroFeature1Desc' },
        { icon: <IconFunctionality />, titleKey: 'reIntroFeature2Title', descKey: 'reIntroFeature2Desc' },
        { icon: <IconIntegration />, titleKey: 'reIntroFeature3Title', descKey: 'reIntroFeature3Desc' },
    ];

    return (
        <div className="container mx-auto px-6 py-16 md:py-0 scroll-element">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-sans text-brand-navy mb-4">{t('reIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-6">{t('reIntroText')}</p>
                    
                    <div className="space-y-6 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start group">
                                <div className="flex-shrink-0 h-14 w-14 p-3 rounded-full bg-brand-navy/5 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-yellow group-hover:scale-110">
                                    {feature.icon}
                                </div>
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
                <div>
                    <img src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('reIntroImageAlt')} className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
            </div>
        </div>
    );
};

const PortfolioSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: 'https://socabeg.com/images/balena.jpg', titleKey: 'reProject1Title', descKey: 'reProject1Desc', featuresKey: 'reProject1Features' },
        { image: 'https://socabeg.com/images/hlm.jpg', titleKey: 'reProject2Title', descKey: 'reProject2Desc', featuresKey: 'reProject2Features' },
        { image: 'https://socabeg.com/images/lac.jpg', titleKey: 'reProject3Title', descKey: 'reProject3Desc', featuresKey: 'reProject3Features' },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            {/* Switched descriptionKey to subtitleKey for better hierarchy as requested */}
            <SectionTitle titleKey="rePortfolioTitle" subtitleKey="rePortfolioSubtitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover" loading="lazy" width="400" height="224" />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-brand-primary mb-2">{t(p.titleKey)}</h3>
                            <p className="text-brand-text text-sm mb-4 flex-grow">{t(p.descKey)}</p>
                            <div className="mt-auto border-t pt-4">
                                <h4 className="font-semibold text-sm text-brand-dark mb-2">{t('rePortfolioKeyFeatures')}</h4>
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
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/5631/5631194.png', titleKey: 'reSustainabilityPoint1Title', descKey: 'reSustainabilityPoint1Desc' },
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/17731/17731183.png', titleKey: 'reSustainabilityPoint2Title', descKey: 'reSustainabilityPoint2Desc' },
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/3043/3043652.png', titleKey: 'reSustainabilityPoint3Title', descKey: 'reSustainabilityPoint3Desc' },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="reSustainabilityTitle" descriptionKey="reSustainabilityText" />
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                     <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('reSustainabilityImageAlt')} className="rounded-lg shadow-xl w-full" loading="lazy" width="576" height="384" />
                </div>
                <div className="md:col-span-3">
                    <div className="space-y-6">
                        {points.map(p => (
                            <div key={p.titleKey} className="flex items-start group">
                                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:scale-110">
                                    <img src={p.iconUrl} alt={t(p.titleKey)} className="h-8 w-8" loading="lazy" width="32" height="32" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-bold text-brand-primary">{t(p.titleKey)}</h3>
                                    <p className="text-brand-text mt-1">{t(p.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AmenitiesSection: React.FC = () => {
    const { t } = useLocalization();
    const amenities = [
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/7516/7516248.png', titleKey: 'reAmenity1Title', descKey: 'reAmenity1Desc' },
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/45/45777.png', titleKey: 'reAmenity2Title', descKey: 'reAmenity2Desc' },
        { iconUrl: 'https://cdn-icons-png.flaticon.com/512/1161/1161490.png', titleKey: 'reAmenity3Title', descKey: 'reAmenity3Desc' },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="reAmenitiesTitle" descriptionKey="reAmenitiesText" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {amenities.map((amenity, index) => (
                    <div
                        key={amenity.titleKey}
                        className="bg-white p-8 rounded-xl shadow-soft text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
                    >
                        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:scale-110">
                            <img src={amenity.iconUrl} alt={t(amenity.titleKey)} className="h-8 w-8" loading="lazy" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t(amenity.titleKey)}</h3>
                        <p className="text-sm text-brand-text-gray leading-relaxed">{t(amenity.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MarketInsightSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="reMarketTitle" descriptionKey="reMarketText" />
            <div className="mt-8">
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('reMarketImageAlt')} className="rounded-lg shadow-xl w-full h-auto object-cover max-w-4xl mx-auto" loading="lazy" width="576" height="384"/>
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center scroll-element">
            <SectionTitle titleKey="reCtaTitle" descriptionKey="reCtaText" />
            <Link to="/contact" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                {t('reCtaButton')}
            </Link>
        </div>
    );
};

const RealEstatePage: React.FC = () => {
  const { t } = useLocalization();
  const realEstateSlides = [
    {
      img: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'reHeroSlide1Title',
      subtitle: 'reHeroSlide1Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'reHeroSlide2Title',
      subtitle: 'reHeroSlide2Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'reHeroSlide3Title',
      subtitle: 'reHeroSlide3Subtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={realEstateSlides} />
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><IntroductionSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><PortfolioSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><SustainabilitySection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><AmenitiesSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><MarketInsightSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20"><CtaSection /></FullScreenSection>
      <Footer />
    </>
  );
};

export default RealEstatePage;
