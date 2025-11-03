

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconCompensation = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconHealth = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
const IconDevelopment = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
const IconMentorship = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H3.75m15-3v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V15m-4.5 0h.01M12 3a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3.75A.75.75 0 0112 3zM3.75 10.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V10.5z" /></svg>;


// --- Page Sections ---

const WhyJoinUsSection: React.FC = () => {
    const { t } = useLocalization();
    const values = [
        { icon: <img src="https://www.flaticon.com/free-icon/shield_3329048?term=shield&page=1&position=50&origin=search&related_id=3329048" alt="" className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueSafetyTitle', descKey: 'careersValueSafetyDesc' },
        { icon: <img src="https://www.flaticon.com/free-icon/premium-badge_70535?term=award&page=1&position=5&origin=search&related_id=70535" alt="" className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueExcellenceTitle', descKey: 'careersValueExcellenceDesc' },
        { icon: <img src="https://www.flaticon.com/free-icon/multiple-users-silhouette_33308?term=user&page=1&position=13&origin=search&related_id=33308" alt="" className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueTeamTitle', descKey: 'careersValueTeamDesc' },
        { icon: <img src="https://www.flaticon.com/free-icon/diagram_2285559?term=growth&page=1&position=4&origin=search&related_id=2285559" alt="" className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueGrowthTitle', descKey: 'careersValueGrowthDesc' },
    ];

    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">{t('careersWhyUsTitle')}</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold font-sans text-brand-navy">{t('careersWhyUsHeadline')}</p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-gray">{t('careersWhyUsIntro')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="animate-fade-in-up">
                    <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A diverse team collaborating on a project at SOCABEG" className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
                <div className="space-y-8">
                    {values.map((item, index) => (
                        <div key={item.titleKey} className="flex items-start group animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms`}}>
                            <div className="flex-shrink-0 h-14 w-14 p-3 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white group-hover:scale-110">{item.icon}</div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold text-brand-navy">{t(item.titleKey)}</h3>
                                <p className="text-brand-text-gray mt-1 leading-relaxed">{t(item.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BenefitsSection: React.FC = () => {
    const { t } = useLocalization();
    const benefits = [
        { icon: <IconCompensation />, titleKey: 'careersBenefit1Title', descKey: 'careersBenefit1Desc' },
        { icon: <IconHealth />, titleKey: 'careersBenefit2Title', descKey: 'careersBenefit2Desc' },
        { icon: <IconDevelopment />, titleKey: 'careersBenefit3Title', descKey: 'careersBenefit3Desc' },
        { icon: <IconMentorship />, titleKey: 'careersBenefit4Title', descKey: 'careersBenefit4Desc' },
    ];
    
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">{t('careersBenefitsTitle')}</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold font-sans text-brand-navy">{t('careersBenefitsHeadline')}</p>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-gray">{t('careersBenefitsIntro')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={benefit.titleKey} className="bg-white p-8 rounded-xl shadow-soft text-center transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 flex flex-col" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out both` }}>
                        <div className="text-brand-yellow mx-auto mb-6 w-16 h-16 p-3 flex items-center justify-center rounded-full bg-brand-navy transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-navy">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t(benefit.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm flex-grow">{t(benefit.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    const testimonials = [
        { quoteKey: 'careersTestimonial1Quote', nameKey: 'careersTestimonial1Name', image: "https://images.pexels.com/photos/5212353/pexels-photo-5212353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { quoteKey: 'careersTestimonial2Quote', nameKey: 'careersTestimonial2Name', image: "https://images.pexels.com/photos/4246210/pexels-photo-4246210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    ];

    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">{t('careersTestimonialsTitle')}</h2>
                <p className="mt-2 text-3xl md:text-4xl font-bold font-sans text-brand-navy">{t('careersTestimonialsHeadline')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((item, index) => (
                     <div key={item.nameKey} className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ animation: `fadeInUp 0.5s ${index * 0.15}s ease-out both` }}>
                        <div className="p-8">
                             <blockquote className="text-lg text-brand-text-gray italic leading-relaxed mb-6 relative">
                                <span className="absolute -top-3 -left-4 text-6xl text-brand-primary/10 font-serif">“</span>
                                {t(item.quoteKey)}
                            </blockquote>
                        </div>
                        <div className="bg-gray-50 px-8 py-4 flex items-center">
                            <img className="h-14 w-14 rounded-full object-cover" src={item.image} alt={t(item.nameKey)} loading="lazy" width="56" height="56" />
                            <div className="ml-4">
                                <cite className="not-italic font-bold text-brand-navy">{t(item.nameKey)}</cite>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CareerOpportunitiesSection: React.FC = () => {
    const { t } = useLocalization();
    const roles = [
        { title: 'Site Engineer', description: 'Supervise daily construction activities, ensuring projects are completed on schedule and to specification.' },
        { title: 'Project Manager', description: 'Lead projects from conception to completion, managing budgets, schedules, and stakeholder communication.' },
        { title: 'Architect', description: 'Design innovative and functional structures that meet client needs and adhere to building codes.' },
        { title: 'Safety Officer', description: 'Implement and monitor safety protocols on-site to ensure a secure working environment for all personnel.' },
    ];
    
    return (
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-navy mb-4">{t('careersOpeningsTitle')}</h2>
            <p className="text-lg text-brand-text-gray max-w-3xl mx-auto mb-12">{t('careersOpeningsText')}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
                {roles.map((role, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-soft border-l-4 border-brand-primary">
                        <h3 className="font-bold text-lg text-brand-navy mb-2">{role.title}</h3>
                        <p className="text-sm text-brand-text-gray">{role.description}</p>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="#" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    {t('careersOpeningsBtnView')}
                </Link>
                <Link to="/contact" className="bg-gray-200 text-brand-navy font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto">
                    {t('careersOpeningsBtnSpontaneous')}
                </Link>
            </div>
        </div>
    );
};


const CareersPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FullScreenSection className="bg-white py-20 md:py-28">
        <WhyJoinUsSection />
      </FullScreenSection>
      <FullScreenSection className="blueprint-bg py-20 md:py-28">
        <BenefitsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-20 md:py-28">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="grid-bg py-20 md:py-28">
        <CareerOpportunitiesSection />
      </FullScreenSection>
      <Footer />
    </>
  );
};

export default CareersPage;