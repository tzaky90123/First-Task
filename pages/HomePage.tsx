
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import MainNavigation from '../components/MainNavigation';

const slides = [
  {
    img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide1Title',
    subtitle: 'heroSlide1Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide2Title',
    subtitle: 'heroSlide2Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide3Title',
    subtitle: 'heroSlide3Subtitle',
  },
];

// --- Helper Components ---

const SectionLogoIcon = ({ className }: { className?: string }) => (
    <img src="https://socabeg.com/favicon.png" alt="" className={className || "inline-block h-10 w-auto -mt-1 mr-3"} aria-hidden="true" />
);

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLocalization();
  const slideInterval = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    slideInterval.current = window.setInterval(nextSlide, 7000);
    return () => {
      if (slideInterval.current) window.clearInterval(slideInterval.current);
    };
  }, [nextSlide]);

  const handleManualNavigation = (action: () => void) => {
    action();
    if (slideInterval.current) {
        clearInterval(slideInterval.current);
        slideInterval.current = window.setInterval(nextSlide, 7000);
    }
  }

  const goToSlide = (index: number) => {
      handleManualNavigation(() => setCurrentSlide(index));
  };
    
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Slide Navigation Buttons */}
      <button 
        onClick={() => handleManualNavigation(prevSlide)} 
        className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={() => handleManualNavigation(nextSlide)} 
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>


      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center container mx-auto px-6">
          <div className="">
              {slides.map((slide, index) => (
                  <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
                      <h1 className="text-3xl md:text-[2.5rem] font-bold leading-tight mb-4 animate-fade-in-up">
                        {t(slide.title)}
                      </h1>
                      <p className="text-base md:text-lg mb-8 animate-fade-in-up animation-delay-300 max-w-5xl mx-auto">
                        {t(slide.subtitle)}
                      </p>
                  </div>
              ))}
              <Link
                to="/promotion-immobiliere"
                className="bg-transparent border-2 border-white text-white text-lg font-bold py-3 px-10 rounded-full hover:bg-white hover:text-brand-dark transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600"
              >
                {t('homeCta')}
              </Link>
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
              {slides.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className="relative w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors" aria-label={`Go to slide ${index + 1}`}>
                       <div
                          className={`h-full rounded-full bg-white transition-all duration-200 ${index === currentSlide ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                      ></div>
                      {index === currentSlide && (
                          <div
                              key={currentSlide} // Re-trigger animation on slide change
                              className="absolute top-0 left-0 h-full rounded-full bg-white animate-slide-indicator"
                              style={{ animationDuration: '7s' }}
                          ></div>
                      )}
                  </button>
              ))}
          </div>

          <div className="absolute bottom-4 w-full">
            <MainNavigation />
          </div>
      </div>
    </div>
  );
};

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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
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
              <div key={index} className="bg-brand-light p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-lg">
                <img src={service.icon} alt={t(service.titleKey)} className="h-12 w-12 mx-auto mb-6 opacity-75" />
                <h3 className="text-xl font-medium text-brand-primary mb-3 font-sans">{t(service.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(service.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const AboutSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section 
            className="py-20 relative" 
            style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/project-paper.png')" }}
        >
            <div className="absolute inset-0 bg-brand-light/95" aria-hidden="true"></div>
            <div className="relative container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('homeAboutSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-bold font-sans text-black">
                        {t('homeAboutSectionHeadline')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-12 items-stretch">
                    <div className="md:col-span-2">
                        <img 
                            src="https://socabeg.com/images/socabeg.jpg" 
                            alt="Ingénieurs SOCABEG planifiant un projet" 
                            className="rounded-lg shadow-xl w-full h-full object-cover"
                        />
                    </div>
                    
                    <div 
                        className="md:col-span-3 flex flex-col justify-start p-8 lg:p-12 rounded-lg relative overflow-hidden"
                        style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/concrete-texture.png')" }}
                    >
                        <div className="absolute inset-0 bg-white/95" aria-hidden="true"></div>

                        <div className="relative z-10">
                            <div className="space-y-2 text-brand-text text-xs md:text-sm leading-snug">
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
                            </div>
                            
                            <div className="mt-8">
                                <Link
                                    to="/a-propos"
                                    className="inline-flex items-center bg-black/5 border border-black/10 text-brand-dark text-sm font-bold py-3 px-8 rounded-full hover:bg-black/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 group"
                                >
                                    <span>{t('learnMore')}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </section>
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
    const duplicatedLogos = [...partnerLogos, ...partnerLogos];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('partnersSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-bold font-sans text-black">{t('partnersSectionHeadline')}</h2>
                </div>
                <div className="logo-scroller">
                    <div className="logo-scroller-inner">
                        {duplicatedLogos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center p-4 mx-4">
                                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-full max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
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
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
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
                            <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                                <div key={index} className="min-w-full h-[500px] relative">
                                    <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" />
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
        </section>
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('programsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-bold font-sans text-black">{t('programsSectionHeadline')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <img src={program.image} alt={t(program.titleKey)} className="w-full h-56 object-cover" />
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
        </section>
    );
};

const StatisticsIcon = () => (
    <img src="https://socabeg.com/favicon.png" alt="" className="h-5 w-5 mr-2" aria-hidden="true" />
);

const StatisticsSection: React.FC = () => {
    const { t } = useLocalization();
    const stats = [
        { value: "+ 2,000", labelKey: "stat1Label" },
        { value: "02", labelKey: "stat2Label" },
        { value: "+ 150", labelKey: "stat3Label" },
        { value: "+ 200 km", labelKey: "stat4Label" },
        { value: "+ 100 ha", labelKey: "stat5Label" }
    ];

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <StatisticsIcon />
                        <span>{t('statisticsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-bold font-sans text-black">
                        {t('statisticsSectionHeadline')}
                    </h2>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className={`bg-white p-6 rounded-lg text-center animate-fade-in-up shadow-sm flex flex-col h-full md:col-span-2 ${index === 3 ? 'md:col-start-2' : ''} ${index === 4 ? 'sm:col-span-2' : ''}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <p className="text-2xl lg:text-3xl font-bold text-brand-secondary font-sans">{stat.value}</p>
                            <div className="mt-2 flex-grow flex items-center justify-center">
                                <p className="text-brand-text text-sm leading-snug whitespace-nowrap">{t(stat.labelKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUsSection: React.FC = () => {
  const { t } = useLocalization();

  const values = [
    { titleKey: "value1Title", descriptionKey: "value1Desc", icon: "https://cdn-icons-png.flaticon.com/512/506/506420.png" },
    { titleKey: "value2Title", descriptionKey: "value2Desc", icon: "https://cdn-icons-png.flaticon.com/512/100/100852.png" },
    { titleKey: "value3Title", descriptionKey: "value3Desc", icon: "https://cdn-icons-png.flaticon.com/512/5631/5631194.png" },
    { titleKey: "value4Title", descriptionKey: "value4Desc", icon: "https://cdn-icons-png.flaticon.com/512/10556/10556522.png" },
    { titleKey: "value5Title", descriptionKey: "value5Desc", icon: "https://cdn-icons-png.flaticon.com/512/798/798008.png" },
    { titleKey: "value6Title", descriptionKey: "value6Desc", icon: "https://cdn-icons-png.flaticon.com/512/33/33308.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
            <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
            <span>{t("whyChooseUsSectionTitle")}</span>
          </h3>
          <h2 className="text-2xl font-bold font-sans text-black">{t("whyChooseUsSectionHeadline")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
              {value.icon && (<img src={value.icon} alt="" className="h-10 w-10 mb-4" />)}
              <div>
                <h3 className="text-xl font-medium text-brand-primary mb-2 font-sans">{t(value.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(value.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    const testimonials = [
        { quoteKey: "testimonial1Quote", nameKey: "testimonial1Name" }, { quoteKey: "testimonial2Quote", nameKey: "testimonial2Name" },
        { quoteKey: "testimonial3Quote", nameKey: "testimonial3Name" }, { quoteKey: "testimonial4Quote", nameKey: "testimonial4Name" },
        { quoteKey: "testimonial5Quote", nameKey: "testimonial5Name" }, { quoteKey: "testimonial6Quote", nameKey: "testimonial6Name" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = useCallback(() => { if (timeoutRef.current) { clearTimeout(timeoutRef.current); } }, []);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)), 5000);
        return () => { resetTimeout(); };
    }, [currentIndex, testimonials.length, resetTimeout]);

    const goNext = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('testimonialsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-bold font-sans text-black">{t('testimonialsSectionHeadline')}</h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white px-8 py-4 md:px-12 md:py-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center h-[400px] md:h-[340px] flex flex-col justify-center">
                                        <div>
                                          <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                                          <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">“{t(testimonial.quoteKey)}”</blockquote>
                                        </div>
                                        <cite className="not-italic font-semibold text-brand-primary font-sans">— {t(testimonial.nameKey)}</cite>
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
        </section>
    );
};

const ContactCTASection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold font-sans mb-4 text-black">{t('homeContactCtaTitle')}</h2>
                <p className="text-lg text-black max-w-2xl mx-auto mb-8">{t('homeContactCtaText')}</p>
                <Link to="/contact" className="inline-block bg-transparent border-2 border-black text-black font-bold py-3 px-10 rounded-full text-lg hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
                    {t('homeContactCtaButton')}
                </Link>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <PartnersSection />
      <MasterpiecesSection />
      <ProgramSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
};

export default HomePage;
