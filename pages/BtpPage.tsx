

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconCivilEng = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25zm13.5 7.5h-2.25a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25H18a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25z" /></svg>;
const IconPublicBuilding = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h6.375M9 12.75h6.375M9 18.75h6.375" /></svg>;
const IconUrbanDev = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const IconProjectMgmt = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconSafety = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const IconSustainability = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconTech = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>;


// --- Page Sections ---

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'btpService1Title', descKey: 'btpService1Desc', icon: <IconCivilEng /> },
        { titleKey: 'btpService2Title', descKey: 'btpService2Desc', icon: <IconPublicBuilding /> },
        { titleKey: 'btpService3Title', descKey: 'btpService3Desc', icon: <IconUrbanDev /> },
        { titleKey: 'btpService4Title', descKey: 'btpService4Desc', icon: <IconProjectMgmt /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">{t('btpServicesNewTitle')}</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t('btpServicesNewSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="bg-white p-8 rounded-lg shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-gold-accent/20">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue-dark mb-3 font-sans">{t(service.titleKey)}</h3>
                        <p className="text-brand-text text-sm flex-grow mb-6 leading-relaxed">{t(service.descKey)}</p>
                        <Link to="#" className="text-brand-gold-accent font-semibold hover:text-brand-blue-dark transition-colors duration-300 mt-auto self-start">
                            {t('learnMoreLink')}
                        </Link>
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
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Collaboration and teamwork" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
                </div>
                <div className="bg-gray-50/50 p-8 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-blue-dark mb-3">{t('btpApproachTitle')}</h2>
                    <p className="text-lg text-gray-600 mb-8">{t('btpApproachSubtitle')}</p>
                    <div className="space-y-8">
                        {approaches.map((item, index) => (
                            <div key={item.titleKey} className="flex items-start group animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms`}}>
                                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 text-brand-blue-dark flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue-dark group-hover:text-white group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-bold text-brand-blue-dark mb-1">{t(item.titleKey)}</h3>
                                    <p className="text-brand-text leading-relaxed">{t(item.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
            <div className="text-center mb-16">
                <h2 className="inline-block text-3xl md:text-4xl font-bold text-brand-navy relative">
                    {t('btpProjectsTitle')}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-brand-yellow"></span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out both` }}>
                        <div className="relative overflow-hidden">
                            <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-brand-navy mb-3 transition-colors duration-300 group-hover:text-brand-yellow">{t(p.titleKey)}</h3>
                            <p className="text-brand-text-gray text-sm flex-grow mb-6">{t(p.descKey)}</p>
                            <Link to="#" className="font-semibold text-brand-navy hover:text-brand-yellow transition-colors duration-300 self-start">
                                {t('viewProjectButton')}
                            </Link>
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
                        <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
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
      <FullScreenSection className="blueprint-bg py-16 md:py-20">
        <ServicesSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20">
        <ApproachSection />
      </FullScreenSection>
      <FullScreenSection className="grid-bg py-16 md:py-20">
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