
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

// Unified logo icon based on user-provided image
const SectionLogoIcon = ({ className }: { className?: string }) => (
    <img src="https://socabeg.com/favicon.png" alt="" className={className || "inline-block h-10 w-auto -mt-1 mr-3"} aria-hidden="true" />
);

const AboutSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('homeAboutSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('homeAboutSectionHeadline')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-6 gap-x-12 items-center">
                    <div className="md:col-span-2">
                        <img 
                            src="https://socabeg.com/images/socabeg.jpg" 
                            alt="Ingénieurs SOCABEG planifiant un projet" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:col-span-3 text-brand-text text-xs md:text-sm leading-snug">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                       <SectionLogoIcon className="inline-block h-5 w-auto mr-2"/>
                       <span>{t('homeMasterpiecesTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('homeMasterpiecesSubtitle')}
                    </h2>
                </div>

                {/* Desktop View: 3-column grid */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {masterpieces.map((masterpiece, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[450px]">
                            <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                             <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold">{t(masterpiece.titleKey)}</h3>
                                <p className="text-sm opacity-90">{t(masterpiece.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Slider */}
                <div className="md:hidden relative w-full max-w-5xl mx-auto">
                    <div className="overflow-hidden relative rounded-lg shadow-xl">
                        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {masterpieces.map((masterpiece, index) => (
                                <div key={index} className="min-w-full h-[500px] relative">
                                    <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                                        <h3 className="text-2xl font-bold">{t(masterpiece.titleKey)}</h3>
                                        <p className="text-sm">{t(masterpiece.descriptionKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Previous image">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    {/* Right Arrow */}
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Next image">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
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
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <StatisticsIcon />
                        <span>{t('statisticsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('statisticsSectionHeadline')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-transparent p-6 rounded-lg text-center animate-fade-in-up border border-gray-300 shadow-md" 
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <p className="text-2xl lg:text-3xl font-bold text-brand-secondary font-sans">{stat.value}</p>
                            <p className="text-brand-text mt-2 text-sm">{t(stat.labelKey)}</p>
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
    {
      titleKey: "value1Title",
      descriptionKey: "value1Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/506/506420.png",
    },
    {
      titleKey: "value2Title",
      descriptionKey: "value2Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/100/100852.png",
    },
    {
      titleKey: "value3Title",
      descriptionKey: "value3Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/5631/5631194.png",
    },
    {
      titleKey: "value4Title",
      descriptionKey: "value4Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/10556/10556522.png",
    },
    {
      titleKey: "value5Title",
      descriptionKey: "value5Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/798/798008.png",
    },
    {
      titleKey: "value6Title",
      descriptionKey: "value6Desc",
      icon: "https://cdn-icons-png.flaticon.com/512/33/33308.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-2">
            {t("whyChooseUsSectionTitle")}
          </h3>
          <h2 className="text-2xl font-medium font-sans text-brand-primary">
            {t("whyChooseUsSectionHeadline")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-brand-light p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {value.icon && (
                <img
                  src={value.icon}
                  alt="" // Decorative icon
                  className="h-10 w-10 mb-4"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2 font-sans">
                  {t(value.titleKey)}
                </h3>
                <p className="text-brand-text text-sm leading-relaxed">
                  {t(value.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
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
            image: 'https://socabeg.com/images/balena.jpg',
            titleKey: 'program1Title',
            typeKey: 'program1Type',
            details: [
                { icon: <IconBed />, textKey: 'program1Bedrooms' },
                { icon: <IconBath />, textKey: 'program1Bathrooms' },
                { icon: <IconArea />, textKey: 'program1Area' },
                { icon: <IconLocation />, textKey: 'program1Location' },
            ],
            descriptionKey: 'program1Desc',
            priceKey: 'program1Price',
        },
        {
            image: 'https://socabeg.com/images/hlm.jpg',
            titleKey: 'program2Title',
            typeKey: 'program2Type',
            details: [
                { icon: <IconBath />, textKey: 'program2Bathrooms' },
                { icon: <IconArea />, textKey: 'program2Area' },
                { icon: <IconLocation />, textKey: 'program2Location' },
            ],
            descriptionKey: 'program2Desc',
            priceKey: 'program2Price',
        },
        {
            image: 'https://socabeg.com/images/lac.jpg',
            titleKey: 'program3Title',
            typeKey: 'program3Type',
            details: [
                { icon: <IconBed />, textKey: 'program3Bedrooms' },
                { icon: <IconBath />, textKey: 'program3Bathrooms' },
                { icon: <IconArea />, textKey: 'program3Area' },
                { icon: <IconLocation />, textKey: 'program3Location' },
            ],
            descriptionKey: 'program3Desc',
            priceKey: 'program3Price',
        },
    ];

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('programsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('programsSectionHeadline')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <img src={program.image} alt={t(program.titleKey)} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-brand-primary font-sans">{t(program.titleKey)}</h3>
                                <p className="text-xs text-gray-500 mb-3">{t(program.typeKey)}</p>
                                
                                <div className="flex flex-wrap items-center text-xs text-gray-600 mb-4 border-y py-2">
                                    {program.details.map((detail, i) => (
                                        <span key={i} className="flex items-center mr-4 mb-1">{detail.icon}{t(detail.textKey)}</span>
                                    ))}
                                </div>
                                
                                <p className="text-brand-text text-sm leading-relaxed mb-4 flex-grow">{t(program.descriptionKey)}</p>

                                <div className="mt-auto">
                                    <p className="font-semibold text-brand-secondary text-sm mb-4">{t(program.priceKey)}</p>
                                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 text-sm">
                                        <Link to="#" className="w-full text-center px-4 py-2 rounded-full bg-brand-primary text-white font-semibold hover:bg-opacity-90 transition">
                                            {t('programDetailsButton')}
                                        </Link>
                                        <Link to="/contact" className="w-full text-center px-4 py-2 rounded-full bg-gray-200 text-brand-primary font-semibold hover:bg-gray-300 transition">
                                            {t('programContactButton')}
                                        </Link>
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, testimonials.length, resetTimeout]);

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('testimonialsSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('testimonialsSectionHeadline')}
                    </h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-brand-light p-8 md:p-12 rounded-lg shadow-sm max-w-3xl mx-auto text-center h-[450px] md:h-[380px] flex flex-col justify-between">
                                        <div>
                                          <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                                          <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">
                                              “{t(testimonial.quoteKey)}”
                                          </blockquote>
                                        </div>
                                        <cite className="not-italic font-semibold text-brand-primary font-sans">
                                            — {t(testimonial.nameKey)}
                                        </cite>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 text-brand-primary bg-white/50 hover:bg-white rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('prevTestimonialAria')}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 text-brand-primary bg-white/50 hover:bg-white rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('nextTestimonialAria')}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

const PartnerSection: React.FC = () => {
    const { t } = useLocalization();
    const partners = [
        { name: 'BHS', src: 'https://socabeg.com/partners/bhs.png' },
        { name: 'Geoplast', src: 'https://socabeg.com/partners/geoplast.png' },
        { name: 'IPRES', src: 'https://socabeg.com/partners/ipres.jpg' },
        { name: 'SAR', src: 'https://socabeg.com/partners/sar.png' },
        { name: 'SGS', src: 'https://socabeg.com/partners/sgs.png' },
        { name: 'SAIH', src: 'https://socabeg.com/partners/sicap.jpg' },
        { name: 'République du Sénégal', src: 'https://socabeg.com/partners/sn.jpg' },
        { name: 'SNHLM', src: 'https://socabeg.com/partners/snhlm.jpg' },
        { name: 'Sonatel', src: 'https://socabeg.com/partners/sonatel.png' }
    ];

    const duplicatedPartners = [...partners, ...partners]; // Duplicate for seamless loop

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>{t('partnersSectionTitle')}</span>
                    </h3>
                    <h2 className="text-2xl font-medium font-sans text-brand-primary">
                        {t('partnersSectionHeadline')}
                    </h2>
                </div>
                <div className="logo-scroller">
                    <div className="logo-scroller-inner">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={index} className="partner-logo flex-shrink-0 mx-10 flex items-center justify-center" style={{ width: '150px' }}>
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    title={partner.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkTo: string;
}

const IconBuildingExpertise = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>;
const IconHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const IconMine = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo }) => {
    const { t } = useLocalization();
    return (
        <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-brand-secondary mx-auto mb-6 h-16 w-16 flex items-center justify-center">{icon}</div>
            <h3 className="text-2xl font-bold font-sans text-brand-primary mb-4">{title}</h3>
            <p className="text-brand-text mb-6">{description}</p>
            <Link to={linkTo} className="font-semibold text-brand-secondary hover:underline">
                {t('learnMore')}
            </Link>
        </div>
    )
}

const ExpertiseSection: React.FC = () => {
    const { t } = useLocalization();
    return (
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-2xl font-medium font-sans text-brand-primary mb-4 flex items-center justify-center">
            <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
            <span>{t('homeServicesTitle')}</span>
          </h2>
          <p className="text-base text-brand-text max-w-3xl mx-auto mb-16">{t('homeExpertiseSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<IconBuildingExpertise />}
              title={t('homeServicesBtpTitle')}
              description={t('homeServicesBtpText')}
              linkTo="/btp"
            />
            <ServiceCard
              icon={<IconHome />}
              title={t('homeServicesReTitle')}
              description={t('homeServicesReText')}
              linkTo="/promotion-immobiliere"
            />
            <ServiceCard
              icon={<IconMine />}
              title={t('homeServicesMinesTitle')}
              description={t('homeServicesMinesText')}
              linkTo="/mines"
            />
          </div>
        </div>
      </section>
    );
}

const ContactCtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="bg-brand-primary text-white">
            <div className="container mx-auto px-5 lg:px-20 py-20 text-center">
                <h2 className="text-4xl font-sans font-bold mb-4">{t('homeContactCtaTitle')}</h2>
                <p className="text-base max-w-2xl mx-auto mb-8">{t('homeContactCtaText')}</p>
                <Link
                    to="/contact"
                    className="bg-brand-secondary text-brand-primary font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition duration-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 focus:ring-offset-brand-primary"
                >
                    {t('homeContactCtaButton')}
                </Link>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
  const { t } = useLocalization();
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    startAutoSlide(); // reset timer on manual navigation
  };

  const nextSlide = useCallback(() => goToSlide((currentSlide + 1) % slides.length), [currentSlide]);
  const prevSlide = useCallback(() => goToSlide((currentSlide - 1 + slides.length) % slides.length), [currentSlide]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden text-white">
        {/* Background Image Slider */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.img}
              alt="" // Alt text is decorative as content is in the overlay
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          
          {/* Animated Text Content */}
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up" key={`${currentSlide}-title`}>
              {t(slides[currentSlide].title)}
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300" key={`${currentSlide}-subtitle`}>
                {t(slides[currentSlide].subtitle)}
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <Link
              to="/promotion-immobiliere"
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 text-white font-bold py-3 px-10 rounded-full hover:bg-white/30 transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/30"
            >
              {t('homeCta')}
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full focus:outline-none z-20"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full focus:outline-none z-20"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex flex-col items-center space-y-4 z-20">
            {/* Slide Indicators */}
            <div className="w-1/4 max-w-xs flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-full bg-brand-secondary rounded-full ${index === currentSlide ? 'animate-slide-indicator' : (index < currentSlide ? 'w-full' : 'w-0')}`}
                    style={index === currentSlide ? { animationDuration: '7s' } : {}}
                  ></div>
                </button>
              ))}
            </div>
            
            {/* Main Navigation */}
            <div className="animate-fade-in-up animation-delay-800">
                <MainNavigation />
            </div>
        </div>
      </section>

      {/* Other Sections */}
      <ExpertiseSection />
      <AboutSection />
      <MasterpiecesSection />
      <ProgramSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PartnerSection />
      <ContactCtaSection />
    </>
  );
};

export default HomePage;