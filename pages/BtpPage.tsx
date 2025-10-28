

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconBridge = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18h16.5M5.25 6H18.75m-13.5 0v1.5m13.5-1.5v1.5m-12 3H17.25m-12 0v1.5m12-1.5v1.5m-9 3h6.75m-6.75 0v1.5m6.75-1.5v1.5m-6.75 2.25h6.75m-6.75 0v1.5m6.75-1.5v1.5M6 6.75v12M18 6.75v12" /></svg>;
const IconBuilding = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18h16.5M5.25 6H18.75m-13.5 0v1.5m13.5-1.5v1.5m-10.5 3v1.5m3-1.5v1.5m3-1.5v1.5m3-1.5v1.5M5.25 9v9.75m13.5-9.75v9.75M3.75 9h16.5" /></svg>;
const IconUrban = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789" /></svg>;
const IconProjectManagement = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.153 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>;
const IconSafety = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const IconSustainability = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconTech = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>;


// --- Page Sections ---

const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-4">{t('btpIntroTitle')}</h2>
            <p className="text-lg text-brand-text leading-relaxed">{t('btpIntroText')}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'btpService1Title', descKey: 'btpService1Desc', icon: <IconBridge /> },
        { titleKey: 'btpService2Title', descKey: 'btpService2Desc', icon: <IconBuilding /> },
        { titleKey: 'btpService3Title', descKey: 'btpService3Desc', icon: <IconUrban /> },
        { titleKey: 'btpService4Title', descKey: 'btpService4Desc', icon: <IconProjectManagement /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('btpServicesTitle')}</h2>
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

const ApproachSection: React.FC = () => {
    const { t } = useLocalization();
    const approaches = [
        { titleKey: 'btpApproachSafetyTitle', descKey: 'btpApproachSafetyDesc', icon: <IconSafety /> },
        { titleKey: 'btpApproachSustainabilityTitle', descKey: 'btpApproachSustainabilityDesc', icon: <IconSustainability /> },
        { titleKey: 'btpApproachTechTitle', descKey: 'btpApproachTechDesc', icon: <IconTech /> },
    ];
    return (
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-6">{t('btpApproachTitle')}</h2>
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Construction planning" className="rounded-lg shadow-xl w-full"/>
            </div>
            <div className="md:col-span-3 space-y-8">
                {approaches.map(item => (
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

const ProjectsSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: "https://images.pexels.com/photos/128830/pexels-photo-128830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject1Title', descKey: 'btpProject1Desc' },
        { image: "https://images.pexels.com/photos/2224797/pexels-photo-2224797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject2Title', descKey: 'btpProject2Desc' },
        { image: "https://images.pexels.com/photos/3773539/pexels-photo-3773539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject3Title', descKey: 'btpProject3Desc' },
    ];
    return (
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('btpProjectsTitle')}</h2>
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

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    const testimonials = [
        { quoteKey: "btpTestimonial1Quote", nameKey: "btpTestimonial1Name" },
        { quoteKey: "btpTestimonial2Quote", nameKey: "btpTestimonial2Name" },
    ];
    return (
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('btpTestimonialsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map(testimonial => (
                    <div key={testimonial.nameKey} className="bg-brand-light p-8 rounded-lg shadow-sm">
                        <svg className="w-10 h-10 text-brand-secondary mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                        <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">“{t(testimonial.quoteKey)}”</blockquote>
                        <cite className="not-italic font-semibold text-brand-primary font-sans">— {t(testimonial.nameKey)}</cite>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-sans text-brand-dark mb-4">{t('btpCtaTitle')}</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto mb-8">{t('btpCtaText')}</p>
            <Link to="/contact" className="bg-brand-primary text-white text-lg font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300 inline-block transform hover:scale-105">
                {t('btpCtaButton')}
            </Link>
        </div>
    );
};


// --- Main Page Component ---

const BtpPage: React.FC = () => {
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
        <ApproachSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ProjectsSection />
      </FullScreenSection>
       <FullScreenSection className="bg-white py-16 md:py-20">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20">
        <CtaSection />
      </FullScreenSection>
      <Footer />
    </SmoothScrollLayout>
  );
};

export default BtpPage;