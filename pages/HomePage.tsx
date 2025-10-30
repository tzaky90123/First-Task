

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import FullScreenSection from '../components/FullScreenSection';
import SectionLogoIcon from '../components/SectionLogoIcon';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';

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
          <div className="text-center mb-12 md:mb-16">
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
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('partnersSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('partnersSectionHeadline')}</h2>
            </div>
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
            <div className="text-center mb-12 md:mb-16">
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
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('programsSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('programsSectionHeadline')}</h2>
            </div>
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


// --- START: New Statistics Section (based on reference image) ---

const IconPlots = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);
const IconEmployees = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);
const IconRoads = ({ className = "w-10 h-10" }: { className?: string }) => (
     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-3h6M3 12h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z" />
    </svg>
);
const IconLand = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21L12 3l9.75 18H2.25z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3M3.75 15.75h16.5" />
    </svg>
);
const IconSubsidiaries = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h6.375M9 12.75h6.375M9 18.75h6.375" />
    </svg>
);


const SocabegBarChart = () => {
    const data = [
        { value: 40, label: 'Q1', color: 'bg-brand-secondary/40' },
        { value: 70, label: 'Q2', color: 'bg-brand-primary' },
        { value: 50, label: 'Q3', color: 'bg-brand-secondary/60' },
        { value: 85, label: 'Q4', color: 'bg-brand-primary/80' },
    ];
    const maxValue = 100;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <h3 className="text-xl font-bold text-brand-navy mb-6">Parcelles Viabilisées (Trimestriel)</h3>
            <div className="w-full h-full flex items-end justify-around space-x-4">
                {data.map((d, i) => (
                    <div key={i} className="flex-grow flex flex-col items-center h-full">
                        <div className="flex-grow flex items-end w-full">
                            <div
                                className={`w-full ${d.color} rounded-t-lg transition-all duration-300 ease-out hover:opacity-75`}
                                style={{ height: `${(d.value / maxValue) * 100}%` }}
                                title={`Valeur: ${d.value}`}
                            ></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GenericChartDisplay = ({ title }: { title: string }) => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <h3 className="text-2xl font-bold text-brand-navy mb-4">{title}</h3>
        <div className="w-full aspect-square p-4">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-50">
                {/* A decorative, abstract line chart */}
                <path d="M 10 80 C 25 20, 40 90, 55 50 S 75 10, 90 60" fill="none" stroke="#C5A43C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 10 90 H 90" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
                <path d="M 10 10 V 90" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
                <circle cx="27" cy="45" r="3" fill="#0052CC" />
                <circle cx="55" cy="50" r="3" fill="#0052CC" />
                <circle cx="90" cy="60" r="3" fill="#0052CC" />
            </svg>
        </div>
        <p className="mt-2 text-gray-500">Données détaillées disponibles dans nos rapports annuels.</p>
    </div>
);

const StatisticsSection: React.FC = () => {
    const { t } = useLocalization();
    const [selectedStat, setSelectedStat] = useState<string>('plots');

    const statsData = {
        plots: {
            title: "+ 2,000",
            descriptionKey: "stat1Label",
            icon: IconPlots,
            chartComponent: SocabegBarChart,
        },
        employees: {
            title: "+ 150",
            descriptionKey: "stat3Label",
            icon: IconEmployees,
            chartComponent: () => <GenericChartDisplay title={t("stat3Label")} />,
        },
        roads: {
            title: "+ 200 km",
            descriptionKey: "stat4Label",
            icon: IconRoads,
            chartComponent: () => <GenericChartDisplay title={t("stat4Label")} />,
        },
        land: {
            title: "+ 100 ha",
            descriptionKey: "stat5Label",
            icon: IconLand,
            chartComponent: () => <GenericChartDisplay title={t("stat5Label")} />,
        },
        subsidiaries: {
            title: "02",
            descriptionKey: "stat2Label",
            icon: IconSubsidiaries,
            chartComponent: () => <GenericChartDisplay title={t("stat2Label")} />,
        }
    };

    const SelectedChart = statsData[selectedStat]?.chartComponent;

    return (
        <div className="container mx-auto px-5 lg:px-20">
             <div className="text-center mb-12 md:mb-16">
                 <h2 className="text-4xl font-bold text-gray-800">{t('statisticsSectionTitle')}</h2>
                 <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
                    {t('statisticsSectionHeadline')}
                 </p>
             </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {Object.entries(statsData).map(([key, data]) => {
                        const isActive = selectedStat === key;
                        const Icon = data.icon;
                        return (
                            <button
                                key={key}
                                onClick={() => setSelectedStat(key)}
                                className={`w-full text-left flex items-start p-5 rounded-xl cursor-pointer transition-all duration-300 ease-in-out group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary ${
                                    isActive
                                    ? 'bg-brand-navy text-white shadow-lg scale-105'
                                    : 'bg-white shadow-md hover:shadow-lg hover:-translate-y-1'
                                }`}
                            >
                                <div className={`flex-shrink-0 p-3 rounded-lg transition-colors duration-300 ${isActive ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-brand-secondary/10'}`}>
                                    <Icon className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-navy group-hover:text-brand-primary'}`} />
                                </div>
                                <div className="ml-4">
                                    <h3 className={`font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-navy'}`}>{data.title}</h3>
                                    <p className={`text-sm mt-1 transition-colors duration-300 ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>{t(data.descriptionKey)}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div className="lg:col-span-3 lg:sticky lg:top-24 h-[550px]">
                    {SelectedChart && (
                        <div key={selectedStat} className="bg-white rounded-2xl shadow-xl w-full h-full animate-fade-in-up">
                            <SelectedChart />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
// --- END: New Statistics Section ---


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
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
            <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
            <span>{t("whyChooseUsSectionTitle")}</span>
          </h3>
          <h2 className="text-2xl font-bold font-sans text-black">{t("whyChooseUsSectionHeadline")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl">
              {value.icon && (<img src={value.icon} alt="" className="h-10 w-10 mb-4" width="40" height="40" loading="lazy" />)}
              <div>
                <h3 className="text-xl font-medium text-brand-primary mb-2 font-sans">{t(value.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(value.descriptionKey)}</p>
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
        { quoteKey: "testimonial1Quote", nameKey: "testimonial1Name" }, { quoteKey: "testimonial2Quote", nameKey: "testimonial2Name" },
        { quoteKey: "testimonial3Quote", nameKey: "testimonial3Name" }, { quoteKey: "testimonial4Quote", nameKey: "testimonial4Name" },
        { quoteKey: "testimonial5Quote", nameKey: "testimonial5Name" }, { quoteKey: "testimonial6Quote", nameKey: "testimonial6Name" }
    ];

    // Helper to group testimonials into pairs for the slider
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
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('testimonialsSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('testimonialsSectionHeadline')}</h2>
            </div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialPairs.map((pair, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0 px-2 md:px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {pair.map((testimonial, testimonialIndex) => (
                                        <div key={testimonialIndex} className="bg-white px-8 py-4 md:px-10 md:py-6 rounded-lg shadow-sm text-center h-[400px] md:h-[340px] flex flex-col justify-center">
                                            <div>
                                              <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
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

// --- New Contact Section ---

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const IconEmail = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconLocationPin = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconLinkedinStyled = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>;
const IconInstagramStyled = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281-.073-1.689-.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689.072-4.948.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44s-.645-1.44-1.441-1.44z" clipRule="evenodd" /></svg>;

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white focus:border-brand-primary transition-all duration-300"
      />
    </div>
  </div>
);

const ContactCTASection: React.FC = () => {
    const { t } = useLocalization();
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormState(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formState);
      alert(t('contactFormSuccess'));
      setFormState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    };

    return (
      <div className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content: Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-5">
            {/* Left Side: Contact Info */}
            <div className="relative p-8 sm:p-12 lg:col-span-2 bg-brand-primary text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold">{t('homeContactContactTitle')}</h3>
                <p className="mt-4 text-lg text-blue-100 opacity-90">{t('homeContactCtaText')}</p>
                
                <ul className="mt-12 space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconPhone /></div>
                    <span className="ml-4">{t('homeContactPhone')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconEmail /></div>
                    <span className="ml-4">{t('homeContactEmail')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconLocationPin /></div>
                    <span className="ml-4">{t('homeContactAddress')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 flex space-x-6">
                <a href="#" aria-label={t('ariaInstagram')} className="text-blue-100 hover:text-white transform hover:scale-110 transition-all duration-300"><IconInstagramStyled /></a>
                <a href="#" aria-label={t('ariaLinkedin')} className="text-blue-100 hover:text-white transform hover:scale-110 transition-all duration-300"><IconLinkedinStyled /></a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 sm:p-12 lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField id="firstName" name="firstName" label={t('homeContactFormFirstName')} type="text" value={formState.firstName} onChange={handleInputChange} required />
                  <InputField id="lastName" name="lastName" label={t('homeContactFormLastName')} type="text" value={formState.lastName} onChange={handleInputChange} required />
                </div>
                <InputField id="email" name="email" label={t('homeContactFormEmail')} type="email" value={formState.email} onChange={handleInputChange} required />
                <InputField id="subject" name="subject" label={t('homeContactFormSubject')} type="text" value={formState.subject} onChange={handleInputChange} required />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('homeContactFormMessage')}</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white focus:border-brand-primary transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 transform hover:scale-105">
                    {t('formSend')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FullScreenSection className="bg-white py-16"><ExpertiseSection /></FullScreenSection>
      <FullScreenSection><AboutSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-12"><PartnersSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><MasterpiecesSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><ProgramSection /></FullScreenSection>
      <FullScreenSection className="bg-gray-50 py-16 md:py-20"><StatisticsSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><WhyChooseUsSection /></FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><TestimonialsSection /></FullScreenSection>
      <section className="w-full">
        <ContactCTASection />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;