

import React, { useState, useEffect, useRef, useCallback, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import FullScreenSection from '../components/FullScreenSection';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import SectionTitle from '../components/SectionTitle';
import ValuesSection from '../components/ValuesSection';

// --- Helper Components ---

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
        <div className="container mx-auto px-5 lg:px-20">
          <SectionTitle subtitleKey="homeServicesTitle" titleKey="homeExpertiseSubtitle" icon />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-light p-6 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-lg flex flex-col justify-center">
                <img src={service.icon} alt={t(service.titleKey)} className="h-12 w-12 mx-auto mb-6 opacity-75" width="48" height="48" loading="lazy" />
                <h3 className="text-xl font-medium text-brand-primary mb-3 font-sans">{t(service.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(service.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
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

    const row1Logos = partnerLogos.slice(0, 5);
    const row2Logos = partnerLogos.slice(5);

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" icon />
             <div className="flex flex-col items-center gap-y-8 md:gap-y-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1 + row1Logos.length}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
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
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="homeMasterpiecesTitle" titleKey="homeMasterpiecesSubtitle" icon />

            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {masterpieces.map((masterpiece, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[450px]">
                        <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="450" />
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
                            <div key={index} className="min-w-full h-[450px] sm:h-[500px] relative">
                                <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" loading="lazy" width="500" height="500" />
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
    );
};

// --- Statistics Section (Redesigned) ---
const IconStatDomain = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
);
const IconStatBranch = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="m22.5 10.5h-5.02l2.27-2.27L18.34 7l-3.75 3.75-1.06 1.06-1.06-1.06L8.66 7 7.25 8.23l2.27 2.27H4.5v2h5.02l-2.27 2.27L8.66 17l3.75-3.75 1.06-1.06 1.06 1.06 3.75 3.75 1.41-1.41-2.27-2.27h5.02v-2Z"/>
    </svg>
);
const IconStatGroup = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
);
const IconStatPerson = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);
const IconStatChartUp = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 17.08z"/>
    </svg>
);

const StatisticsSection: React.FC = () => {
    const { t } = useLocalization();
    const [activeIndex, setActiveIndex] = useState(0);

    const stats = [
        { value: "+ 2,000", labelKey: 'stat1Label', icon: <IconStatDomain /> },
        { value: "02", labelKey: 'stat2Label', icon: <IconStatBranch /> },
        { value: "+ 150", labelKey: 'stat3Label', icon: <IconStatGroup /> },
        { value: "+ 200 Km", labelKey: 'stat4Label', icon: <IconStatPerson /> },
        { value: "+ 500 Ha", labelKey: 'stat5Label', icon: <IconStatChartUp /> },
    ];
    
    const allChartData = [
        [ // Data for stat 1
            { label: 'Q1', value: 45 }, { label: 'Q2', value: 65 }, { label: 'Q3', value: 80 }, { label: 'Q4', value: 95 },
        ],
        [ // Data for stat 2
            { label: 'Q1', value: 10 }, { label: 'Q2', value: 15 }, { label: 'Q3', value: 12 }, { label: 'Q4', value: 20 },
        ],
        [ // Data for stat 3
            { label: 'Q1', value: 30 }, { label: 'Q2', value: 40 }, { label: 'Q3', value: 55 }, { label: 'Q4', value: 60 },
        ],
        [ // Data for stat 4
            { label: 'Q1', value: 50 }, { label: 'Q2', value: 70 }, { label: 'Q3', value: 60 }, { label: 'Q4', value: 85 },
        ],
        [ // Data for stat 5
            { label: 'Q1', value: 25 }, { label: 'Q2', value: 35 }, { label: 'Q3', value: 50 }, { label: 'Q4', value: 70 },
        ],
    ];

    const chartData = allChartData[activeIndex];
    const maxValue = 100;

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="statisticsSectionHeadline" titleKey="statisticsSectionTitle" icon />

            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                {/* Left Column - Stats */}
                <div className="lg:col-span-2 flex flex-col gap-y-4">
                     {stats.map((stat, index) => (
                         <div 
                            key={index} 
                            onClick={() => setActiveIndex(index)}
                            className={`p-4 rounded-lg border flex items-center gap-x-4 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                                index === activeIndex 
                                    ? 'bg-brand-navy border-brand-secondary shadow-lg' 
                                    : 'bg-white border-gray-200/80 shadow-soft'
                            }`}
                        >
                            <div className={`p-3 rounded-md flex-shrink-0 ${index === activeIndex ? 'bg-brand-secondary/20' : 'bg-blue-50'}`}>
                                {cloneElement(stat.icon, { 
                                    className: `h-6 w-6 ${index === activeIndex ? 'text-brand-secondary' : 'text-brand-navy'}` 
                                })}
                            </div>
                            <div>
                                <p className={`text-sm font-medium ${index === activeIndex ? 'text-gray-300' : 'text-brand-text-gray'}`}>{t(stat.labelKey)}</p>
                                <p className={`text-2xl font-bold ${index === activeIndex ? 'text-brand-secondary' : 'text-brand-navy'}`}>{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column - Chart */}
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">Chiffre d'Affaires Trimestriel</h3>
                    <p className="text-sm text-brand-text-gray mb-6">(en millions de FCFA)</p>
                    <div className="flex-grow h-64 flex items-end justify-around space-x-4 pt-4 border-b border-gray-200">
                        {chartData.map(data => (
                            <div key={data.label} className="w-full flex flex-col items-center h-full justify-end">
                                <div
                                    className="w-3/4 bg-brand-secondary rounded-t-lg transition-all duration-500 ease-out hover:opacity-80"
                                    style={{ height: `${(data.value / maxValue) * 100}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                     <div className="flex justify-around space-x-4 pt-2">
                         {chartData.map(data => (
                             <div key={data.label} className="w-full text-center">
                                 <div className="text-xs font-semibold text-brand-text-gray">{data.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
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
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="programsSectionTitle" titleKey="programsSectionHeadline" icon />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <img src={program.image} alt={t(program.titleKey)} className="w-full h-56 object-cover" loading="lazy" width="400" height="224" />
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
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="testimonialsSectionTitle" titleKey="testimonialsSectionHeadline" icon />
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialPairs.map((pair, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 px-2 md:px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {pair.map((testimonial, testimonialIndex) => (
                                        <div key={testimonialIndex} className="bg-brand-light px-8 py-4 md:px-10 md:py-6 rounded-lg shadow-sm text-center h-[400px] md:h-[340px] flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                 <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('prevTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 text-brand-primary bg-white hover:bg-gray-100 rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label={t('nextTestimonialAria')}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FullScreenSection className="bg-white py-16 md:py-20">
                <ExpertiseSection />
            </FullScreenSection>
            <FullScreenSection className="bg-gray-100 py-16 md:py-24">
                <AboutSection />
            </FullScreenSection>
            <FullScreenSection className="bg-white py-16 md:py-20">
                <PartnersSection />
            </FullScreenSection>
            <FullScreenSection className="bg-brand-light py-16 md:py-20">
                <ProgramSection />
            </FullScreenSection>
            <FullScreenSection className="bg-white py-16 md:py-20">
                <MasterpiecesSection />
            </FullScreenSection>
            <FullScreenSection className="bg-brand-light py-16 md:py-20">
                <ValuesSection />
            </FullScreenSection>
            <FullScreenSection className="blueprint-bg py-16 md:py-24">
                <StatisticsSection />
            </FullScreenSection>
            <FullScreenSection className="bg-white py-16 md:py-20">
                <TestimonialsSection />
            </FullScreenSection>
            <ContactSection />
            <Footer />
        </>
    );
};

export default HomePage;