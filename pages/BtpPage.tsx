
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

// --- Page Sections ---

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'btpService1Title', descKey: 'btpService1Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/807/807303.png" alt={t('btpService1Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService2Title', descKey: 'btpService2Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/69/69847.png" alt={t('btpService2Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService3Title', descKey: 'btpService3Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1483/1483285.png" alt={t('btpService3Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService4Title', descKey: 'btpService4Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt={t('btpService4Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle subtitleKey="btpServicesNewTitle" titleKey="btpServicesNewSubtitle" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="bg-white p-8 rounded-lg shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col group">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-secondary">
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
        { titleKey: 'btpApproachSafetyTitle', descKey: 'btpApproachSafetyDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1161/1161439.png" alt={t('btpApproachSafetyIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachSustainabilityTitle', descKey: 'btpApproachSustainabilityDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/5631/5631194.png" alt={t('btpApproachSustainabilityIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachTechTitle', descKey: 'btpApproachTechDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/2752/2752819.png" alt={t('btpApproachTechIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('btpApproachImageAlt')} className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
                <div className="bg-gray-50/50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold font-sans text-brand-blue-dark mb-3">{t('btpApproachTitle')}</h2>
                    <p className="text-lg text-gray-600 mb-6">{t('btpApproachSubtitle')}</p>
                    <div className="space-y-8">
                        {approaches.map((item, index) => (
                            <div key={item.titleKey} className="flex items-start group">
                                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 text-brand-blue-dark flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110">
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
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="btpProjectsTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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

// --- Local Testimonials Section with Custom Styling ---
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="testimonialsSectionTitle" titleKey="testimonialsSectionHeadline" />
            <div className="relative">
                <div className="overflow-hidden mb-8">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialPairs.map((pair, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 px-2 md:px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {pair.map((testimonial, testimonialIndex) => (
                                        <div key={testimonialIndex} className="bg-white mx-10 md:mx-14 px-8 py-4 md:px-10 md:py-6 rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.1)] text-center h-[400px] md:h-[340px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,0,0,0.15)] hover:-translate-y-1">
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
                 {/* Gold Interaction Buttons */}
                 <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 text-white bg-brand-secondary hover:bg-white hover:text-brand-secondary rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('prevTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 text-white bg-brand-secondary hover:bg-white hover:text-brand-secondary rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('nextTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Black Slide Markers */}
                <div className="flex justify-center space-x-2 mt-4">
                    {testimonialPairs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                resetTimeout();
                                timeoutRef.current = window.setTimeout(goNext, 5000);
                            }}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-8 bg-black' : 'w-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
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
          title: 'btpHeroSlide1Title',
          subtitle: 'btpHeroSlide1Subtitle',
        },
        {
          img: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpHeroSlide2Title',
          subtitle: 'btpHeroSlide2Subtitle',
        },
        {
          img: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpHeroSlide3Title',
          subtitle: 'btpHeroSlide3Subtitle',
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
      <Footer />
    </>
  );
};

export default BtpPage;
