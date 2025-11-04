

import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SectionTitle from '../components/SectionTitle';

// --- Icons ---
const IconCivilEng = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25zm13.5 7.5h-2.25a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25H18a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25z" /></svg>;
const IconPublicBuilding = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h6.375M9 12.75h6.375M9 18.75h6.375" /></svg>;
const IconUrbanDev = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const IconProjectMgmt = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


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
            <SectionTitle titleKey="btpServicesNewTitle" descriptionKey="btpServicesNewSubtitle" />
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
        { titleKey: 'btpApproachSafetyTitle', descKey: 'btpApproachSafetyDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1161/1161439.png" alt="" className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachSustainabilityTitle', descKey: 'btpApproachSustainabilityDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/5631/5631194.png" alt="" className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachTechTitle', descKey: 'btpApproachTechDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/2752/2752819.png" alt="" className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Collaboration and teamwork" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
                <div className="bg-gray-50/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold font-sans text-brand-blue-dark mb-3">{t('btpApproachTitle')}</h2>
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
            <SectionTitle titleKey="btpProjectsTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out both` }}>
                        <div className="relative overflow-hidden">
                            <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width="400" height="224" />
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
        { quoteKey: "testimonial1Quote", nameKey: "testimonial1Name" },
        { quoteKey: "testimonial2Quote", nameKey: "testimonial2Name" },
        { quoteKey: "testimonial3Quote", nameKey: "testimonial3Name" },
        { quoteKey: "testimonial4Quote", nameKey: "testimonial4Name" },
        { quoteKey: "testimonial5Quote", nameKey: "testimonial5Name" },
        { quoteKey: "testimonial6Quote", nameKey: "testimonial6Name" }
    ];

    const chunk = <T,>(arr: T[], size: number): T[][] =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
    );
    
    const testimonialPairs = chunk(testimonials, 2);
    const numSlides = testimonialPairs.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === numSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? numSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container mx-auto px-6 max-w-5xl">
            <SectionTitle titleKey="btpTestimonialsTitle" />
            
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialPairs.map((pair, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {pair.map((testimonial) => (
                                        <div key={testimonial.nameKey} className="bg-brand-light p-8 rounded-lg shadow-sm text-center flex flex-col justify-center">
                                            <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h3l2-4V7H4v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path></svg>
                                            <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">“{t(testimonial.quoteKey)}”</blockquote>
                                            <cite className="not-italic font-semibold text-brand-primary font-sans">— {t(testimonial.nameKey)}</cite>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-4 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('prevTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-4 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('nextTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

// --- Main Page Component ---

const BtpPage: React.FC = () => {
    const { t } = useLocalization();
    const btpSlides = [
        {
          img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpHeroTitle',
          subtitle: 'btpHeroSubtitle',
        },
        {
          img: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpExpertiseTitle',
          subtitle: 'btpHeroExpertiseSubtitle',
        },
        {
          img: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpProjectsTitle',
          subtitle: 'btpHeroProjectsSubtitle',
        },
    ];

  return (
    <>
      <HeroSection slides={btpSlides} />
      <FullScreenSection className="bg-gray-100 py-16 md:py-20">
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
      <ContactSection />
      <Footer />
    </>
  );
};

export default BtpPage;