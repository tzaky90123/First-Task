

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
import TestimonialsSection from '../components/TestimonialsSection';

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
          <SectionTitle subtitleKey="homeServicesTitle" titleKey="homeExpertiseSubtitle" />
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
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" />
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
            <SectionTitle subtitleKey="homeMasterpiecesTitle" titleKey="homeMasterpiecesSubtitle" />

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

// --- Chart Components ---

const BarChart: React.FC<{ data: { label: string; value: number }[] }> = ({ data }) => {
    const maxValue = Math.max(...data.map(d => d.value)) * 1.1;
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-grow flex items-end justify-around space-x-4 pt-4 border-b border-gray-200">
                {data.map(d => (
                    <div key={d.label} className="w-full flex flex-col items-center h-full justify-end group">
                        <div
                            className="w-3/4 bg-brand-secondary rounded-t-lg transition-all duration-500 ease-out hover:opacity-80"
                            style={{ height: `${(d.value / maxValue) * 100}%` }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-around space-x-4 pt-2">
                {data.map(d => (
                    <div key={d.label} className="w-full text-center">
                        <div className="text-xs font-semibold text-brand-text-gray">{d.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DonutChart: React.FC = () => {
    const data = [{name: 'Keur Invest', value: 60}, {name: 'SOCABEG Mining', value: 40}];
    const colors = ['#D4AF37', '#0B1C3F'];

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    const total = data.reduce((sum, item) => sum + item.value, 0);
    let startAngle = 0;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
            <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="15" />
                {data.map((item, index) => {
                    const angle = (item.value / total) * 360;
                    const endAngle = startAngle + angle;
                    const pathData = describeArc(50, 50, 40, startAngle, endAngle - 2);
                    startAngle = endAngle;
                    return (
                        <path
                            key={index}
                            d={pathData}
                            stroke={colors[index]}
                            strokeWidth="15"
                            fill="none"
                            className="animate-donut-segment"
                            style={{ animationDelay: `${index * 200}ms` }}
                        />
                    );
                })}
            </svg>
            <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-bold text-brand-navy">02</span>
                <span className="text-sm text-brand-text-gray">Filiales</span>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center text-xs text-brand-text-gray">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors[index] }}></span>
                        <span>{item.name} ({item.value}%)</span>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes donut-segment {
                    from { stroke-dasharray: 0, 1000; }
                    to { stroke-dasharray: 1000, 0; }
                }
                .animate-donut-segment {
                    animation: donut-segment 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const LineChart: React.FC<{ data: { label: string; value: number }[] }> = ({ data }) => {
    const width = 320, height = 240, padding = 25;
    const maxValue = Math.max(...data.map(p => p.value)) * 1.1;
    const points = data.map((point, i) => {
        const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
        const y = height - padding - (point.value / maxValue) * (height - 2 * padding);
        return `${x},${y}`;
    }).join(' ');
    
    const pathRef = useRef<SVGPolylineElement>(null);
    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${length}`;
            pathRef.current.style.strokeDashoffset = `${length}`;
            setTimeout(() => {
                if(pathRef.current) pathRef.current.style.strokeDashoffset = '0';
            }, 100);
        }
    }, [data]);

    return (
         <div className="w-full h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <svg viewBox={`0 0 ${width} ${height}`}>
                    <polyline
                        ref={pathRef}
                        fill="none"
                        stroke="#0052CC"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={points}
                        style={{transition: 'stroke-dashoffset 1s ease-out'}}
                    />
                    {data.map((point, i) => {
                        const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
                        const y = height - padding - (point.value / maxValue) * (height - 2 * padding);
                        return <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke="#0052CC" strokeWidth="2" />;
                    })}
                </svg>
            </div>
             <div className="flex justify-around space-x-4 pt-2 border-t border-gray-200">
                {data.map(d => (
                    <div key={d.label} className="w-full text-center">
                        <div className="text-xs font-semibold text-brand-text-gray">{d.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProgressBarChart: React.FC = () => {
    const value = 200, max = 250;
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => setPercentage((value / max) * 100), 100);
    }, [value, max]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-8">
            <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-brand-navy">Progression Annuelle</span>
                    <span className="text-lg font-bold text-brand-primary">{value} / {max} Km</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                    <div 
                        className="bg-brand-secondary h-5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <p className="text-right text-sm text-brand-text-gray mt-2">{Math.round(percentage)}% de l'objectif atteint</p>
            </div>
        </div>
    );
};

const AreaChart: React.FC<{ data: { label: string; value: number }[] }> = ({ data }) => {
    const width = 320, height = 240, padding = 25;
    const maxValue = Math.max(...data.map(p => p.value)) * 1.1;
    
    const points = data.map((point, i) => {
        const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
        const y = height - padding - (point.value / maxValue) * (height - 2 * padding);
        return `${x},${y}`;
    }).join(' ');

    const areaPath = `M${padding},${height - padding} L${points} L${width - padding},${height - padding} Z`;
    
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <svg viewBox={`0 0 ${width} ${height}`}>
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C5A43C" stopOpacity={0.4}/>
                            <stop offset="100%" stopColor="#C5A43C" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <path d={areaPath} fill="url(#areaGradient)" className="animate-area-fill" />
                    <polyline
                        fill="none"
                        stroke="#C5A43C"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={points}
                        className="animate-path-draw"
                    />
                </svg>
            </div>
            <div className="flex justify-around space-x-4 pt-2 border-t border-gray-200">
                {data.map(d => (
                    <div key={d.label} className="w-full text-center">
                        <div className="text-xs font-semibold text-brand-text-gray">{d.label}</div>
                    </div>
                ))}
            </div>
             <style>{`
                @keyframes area-fill { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-area-fill { animation: area-fill 1s ease-out forwards; }
                @keyframes path-draw { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
                .animate-path-draw { stroke-dasharray: 1000; animation: path-draw 1.5s ease-out forwards; }
            `}</style>
        </div>
    );
};

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
const IconStatRoads = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.2,12.4,12,18.6,5.8,12.4A6,6,0,0,1,12,4a6,6,0,0,1,6.2,8.4Z M12,12a2,2,0,1,0-2-2A2,2,0,0,0,12,12Z" />
      <rect width="24" height="24" fill="none" />
    </svg>
);
const IconStatLand = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.2,6.32L12,22l7.8-3.68A9.89,9.89,0,0,0,22,12,10,10,0,0,0,12,2Zm0,12a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
    </svg>
);

const StatisticsSection: React.FC = () => {
    const { t } = useLocalization();
    const [activeIndex, setActiveIndex] = useState(0);

    const stats = [
        { value: "+ 2,000", labelKey: 'stat1Label', icon: <IconStatDomain /> },
        { value: "02", labelKey: 'stat2Label', icon: <IconStatBranch /> },
        { value: "+ 150", labelKey: 'stat3Label', icon: <IconStatGroup /> },
        { value: "+ 200 Km", labelKey: 'stat4Label', icon: <IconStatRoads /> },
        { value: "+ 500 Ha", labelKey: 'stat5Label', icon: <IconStatLand /> },
    ];
    
    const chartData = [
        [ { label: 'Q1', value: 450 }, { label: 'Q2', value: 650 }, { label: 'Q3', value: 800 }, { label: 'Q4', value: 950 } ],
        [],
        [ { label: 'Q1', value: 20 }, { label: 'Q2', value: 45 }, { label: 'Q3', value: 50 }, { label: 'Q4', value: 35 } ],
        [],
        [ { label: 'Q1', value: 80 }, { label: 'Q2', value: 150 }, { label: 'Q3', value: 120 }, { label: 'Q4', value: 150 } ],
    ];

    const chartTitles = [
        "Ventes Trimestrielles de Parcelles",
        "Répartition des Filiales Stratégiques",
        "Croissance des Collaborateurs",
        "Progression des Voiries Réalisées",
        "Acquisition d'Assiettes Foncières"
    ];
    const chartSubtitles = [
        "(nombre d'unités vendues)",
        "(contribution par entité)",
        "(nouveaux employés par trimestre)",
        "(objectif annuel)",
        "(hectares acquis par trimestre)"
    ];

    const chartComponents = [
        <BarChart data={chartData[0]} />,
        <DonutChart />,
        <LineChart data={chartData[2]} />,
        <ProgressBarChart />,
        <AreaChart data={chartData[4]} />,
    ];

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="statisticsSectionHeadline" titleKey="statisticsSectionTitle" />

            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
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

                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg h-full flex flex-col min-h-[450px]">
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">{chartTitles[activeIndex]}</h3>
                    <p className="text-sm text-brand-text-gray mb-6">{chartSubtitles[activeIndex]}</p>
                    <div className="flex-grow">
                      {chartComponents[activeIndex]}
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
            <SectionTitle subtitleKey="programsSectionTitle" titleKey="programsSectionHeadline" />
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

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FullScreenSection className="bg-white py-16 md:py-20">
        <ExpertiseSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
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
      <FullScreenSection className="grid-bg py-16 md:py-20">
        <StatisticsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ContactSection />
      </FullScreenSection>
      <Footer />
    </>
  );
};

export default HomePage;