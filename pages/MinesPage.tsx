

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconExplore = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
const IconExtract = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>;
const IconProcess = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconLogistics = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 9h4l3 4v4h-8v-2" /></svg>;
const IconSafety = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const IconSustainability = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconReclamation = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>;

// --- Page Sections ---
const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('minesIntroTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed">{t('minesIntroText')}</p>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/730467/pexels-photo-730467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mining operation" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'minesService1Title', descKey: 'minesService1Desc', icon: <IconExplore /> },
        { titleKey: 'minesService2Title', descKey: 'minesService2Desc', icon: <IconExtract /> },
        { titleKey: 'minesService3Title', descKey: 'minesService3Desc', icon: <IconProcess /> },
        { titleKey: 'minesService4Title', descKey: 'minesService4Desc', icon: <IconLogistics /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('minesServicesTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <div key={service.titleKey} className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="text-brand-secondary mx-auto mb-4 w-16 h-16 flex items-center justify-center">{service.icon}</div>
                        <h3 className="text-xl font-bold text-brand-primary mb-2">{t(service.titleKey)}</h3>
                        <p className="text-brand-text text-sm">{t(service.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: "https://images.pexels.com/photos/2555627/pexels-photo-2555627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject1Title', descKey: 'minesProject1Desc' },
        { image: "https://images.pexels.com/photos/2533084/pexels-photo-2533084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject2Title', descKey: 'minesProject2Desc' },
        { image: "https://images.pexels.com/photos/12971169/pexels-photo-12971169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject3Title', descKey: 'minesProject3Desc' },
    ];
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('minesProjectsTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(p => (
                    <div key={p.titleKey} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-primary mb-2">{t(p.titleKey)}</h3>
                            <p className="text-brand-text text-sm">{t(p.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SafetyEnvironmentSection: React.FC = () => {
    const { t } = useLocalization();
    const commitments = [
        { titleKey: 'minesSafetyPoint1Title', descKey: 'minesSafetyPoint1Desc', icon: <IconSafety /> },
        { titleKey: 'minesSafetyPoint2Title', descKey: 'minesSafetyPoint2Desc', icon: <IconSustainability /> },
        { titleKey: 'minesSafetyPoint3Title', descKey: 'minesSafetyPoint3Desc', icon: <IconReclamation /> },
    ];
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-6">{t('minesSafetyTitle')}</h2>
                <p className="text-lg text-brand-text leading-relaxed mb-6">{t('minesSafetyText')}</p>
                <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Environmental reclamation" className="rounded-lg shadow-xl w-full"/>
            </div>
            <div className="md:col-span-3 space-y-8">
                {commitments.map(item => (
                    <div key={item.titleKey} className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">{item.icon}</div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-brand-primary">{t(item.titleKey)}</h3>
                            <p className="text-brand-text mt-1">{t(item.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TechnologySection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('minesTechTitle')}</h2>
            <p className="text-lg text-brand-text leading-relaxed">{t('minesTechText')}</p>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 max-w-3xl text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12">{t('minesTestimonialsTitle')}</h2>
             <div className="bg-brand-light p-8 rounded-lg shadow-sm">
                <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                <blockquote className="text-xl text-brand-text italic leading-relaxed mb-6">“{t('minesTestimonial1Quote')}”</blockquote>
                <cite className="not-italic font-semibold text-brand-primary font-sans">— {t('minesTestimonial1Name')}</cite>
            </div>
        </div>
    );
};


const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-sans text-brand-dark mb-4">{t('minesCtaTitle')}</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto mb-8">{t('minesCtaText')}</p>
            <Link to="/contact" className="bg-brand-primary text-white text-lg font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300 inline-block transform hover:scale-105">
                {t('minesCtaButton')}
            </Link>
        </div>
    );
};

const MinesPage: React.FC = () => {
  return (
    <SmoothScrollLayout>
      <HeroSection />
      <FullScreenSection className="bg-white py-16 md:py-20">
        <IntroductionSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ServicesSection />
      </FullScreenSection>
       <FullScreenSection className="bg-white py-16 md:py-20">
        <ProjectsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <SafetyEnvironmentSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20">
        <TechnologySection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20">
        <CtaSection />
      </FullScreenSection>
      <Footer />
    </SmoothScrollLayout>
  );
};

export default MinesPage;