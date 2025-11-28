
import React, { useState, useEffect, useRef, useCallback, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import FullScreenSection from '../components/FullScreenSection';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" />
             <div className="flex flex-col items-center gap-y-10 md:gap-y-14">
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 lg:gap-x-32">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4">
                            <img 
                                src={logo} 
                                alt={t('partnerLogoAlt').replace('{number}', String(index + 1))} 
                                className="max-h-24 md:max-h-32 w-auto object-contain transition-all duration-300 partner-logo" 
                                loading="lazy" height="128" width="200"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 lg:gap-x-32">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-4">
                            <img 
                                src={logo} 
                                alt={t('partnerLogoAlt').replace('{number}', String(index + 1 + row1Logos.length))} 
                                className="max-h-24 md:max-h-32 w-auto object-contain transition-all duration-300 partner-logo" 
                                loading="lazy" height="128" width="200"
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
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

                <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label={t('masterpiecesPrev')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label={t('masterpiecesNext')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

// --- Statistics Section (Redesigned) ---

// --- Chart Components ---

// 1. Circular Gauge for Land
const CircularGauge: React.FC<{ value: string; label: string; subLabel: string }> = ({ value, label, subLabel }) => {
    // Hardcoded visual representation as requested (thin radial arc, gold color)
    // We'll approximate ~75% circle for the aesthetic
    const radius = 90;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (0.8 * circumference); // 80% filled

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
                <svg
                    height={radius * 2}
                    width={radius * 2}
                    className="transform -rotate-90"
                >
                    <circle
                        stroke="#e5e7eb"
                        strokeWidth={stroke}
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        stroke="#C5A43C"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-out' }}
                        strokeLinecap="round"
                        fill="transparent"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-brand-navy">{value}</span>
                </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-brand-secondary uppercase tracking-widest">{subLabel}</p>
        </div>
    );
};

// 2. Large Counter for Subsidiaries
const LargeCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <span className="text-9xl font-black text-brand-navy leading-none mb-4">{value}</span>
            <p className="text-xl font-bold text-brand-secondary uppercase tracking-widest">{label}</p>
        </div>
    );
};

// 3. Thin Donut Chart for Employees
const DonutChart: React.FC<{ valueLabel: string; }> = ({ valueLabel }) => {
    const size = 220;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    // Let's pretend it's a full circle donut for the visual, or a specific percentage. 
    // Request says "Thin Donut Chart... gold stroke with white center".
    // We'll make it 100% gold stroke for the 'whole' look or partial if it represents progress.
    // Assuming full ring for "Employees" count representation.
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div className="relative" style={{ width: size, height: size }}>
                 <svg width={size} height={size} className="transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="#e5e7eb"
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="#C5A43C"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={0} // Full circle
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-navy">{valueLabel}</span>
                </div>
            </div>
        </div>
    );
};

// 4. Horizontal Progress Bar for Roads
const ProgressBar: React.FC<{ value: string; unit: string }> = ({ value, unit }) => {
    const percentage = 80; // Visual representation for 200km out of 250km target (implied from context)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-12">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-brand-secondary rounded-full" 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="mt-6 text-center">
                 <span className="text-4xl font-bold text-brand-navy">{value}</span>
                 <span className="text-xl text-brand-text-gray ml-2">{unit}</span>
            </div>
        </div>
    );
};

// 5. Sparkline for Land Base
const Sparkline: React.FC<{ data: { value: number }[]; valueLabel: string }> = ({ data, valueLabel }) => {
    // Simple SVG sparkline
    const width = 300;
    const height = 150;
    const values = data.map(d => d.value);
    const max = Math.max(...values, 1) * 1.2;
    const min = 0;
    const range = max - min;
    
    // Create path d
    const points = values.map((val, i) => {
        const x = (i / (values.length - 1)) * width;
        const y = height - ((val - min) / range) * height;
        return `${x},${y}`;
    }).join(' ');

    const fillPath = `M0,${height} ${values.map((val, i) => {
         const x = (i / (values.length - 1)) * width;
         const y = height - ((val - min) / range) * height;
         return `L${x},${y}`;
    }).join(' ')} L${width},${height} Z`;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
             <div className="relative mb-4">
                 <svg width={width} height={height} overflow="visible">
                    <defs>
                        <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C5A43C" stopOpacity={0.3}/>
                            <stop offset="100%" stopColor="#C5A43C" stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <path d={fillPath} fill="url(#sparklineGradient)" stroke="none" />
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#C5A43C"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Dots */}
                    {values.map((val, i) => {
                        const x = (i / (values.length - 1)) * width;
                        const y = height - ((val - min) / range) * height;
                        return <circle key={i} cx={x} cy={y} r={4} fill="#fff" stroke="#C5A43C" strokeWidth={2} />;
                    })}
                 </svg>
             </div>
             <span className="text-3xl font-bold text-brand-navy">{valueLabel}</span>
        </div>
    );
};


// 6. Generic Bar Chart (Styled) - Main Sales Chart style (kept for reference or if used elsewhere)
const BarChart: React.FC<{
    data: { label: string; value: number }[],
    t: (key: string) => string,
    target?: number,
    unit?: string
}> = ({ data, t, target, unit = '' }) => {
    const maxValue = Math.max(...data.map(d => d.value), target || 0) * 1.1;

    return (
        <div className="w-full h-full flex flex-col px-4">
            {/* Chart Area */}
            <div className="flex-grow flex items-end justify-around space-x-6 pt-8 pb-4 relative">
                {/* Gridlines */}
                {[0.25, 0.5, 0.75, 1].map((tick) => (
                    <div key={tick} className="absolute w-full border-t border-gray-100" style={{ bottom: `${tick * 100}%`, left: 0 }}></div>
                ))}

                {/* Bars */}
                {data.map(d => (
                    <div key={d.label} className="w-full flex flex-col items-center h-full justify-end group relative z-10">
                         {/* Bar */}
                        <div
                            className="w-1/2 bg-brand-secondary rounded-t-lg transition-all duration-500 ease-out group-hover:opacity-80 relative shadow-sm"
                            style={{ height: `${(d.value / maxValue) * 100}%` }}
                        >
                             <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {d.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {/* X-Axis Labels */}
            <div className="flex justify-around space-x-6 pt-2 border-t border-gray-200">
                {data.map(d => (
                    <div key={d.label} className="w-full text-center">
                        <div className="text-xs font-semibold text-brand-text-gray">{t(d.label)}</div>
                    </div>
                ))}
            </div>
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
        <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.2,6.32L12,22l7.8-3.68A9.89,9.89,0,0,0,22,12,10,10,0,0,12,2Zm0,12a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
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
    
    const chartInsights = [
        'statInsight1', // Land
        'statInsight2', // Subsidiaries
        'statInsight3', // Employees
        'statInsight4', // Roads
        'statInsight5', // Land Base
    ];
    
    // Data used for sparkline or bar chart if needed
    const landBaseData = [ { value: 80 }, { value: 150 }, { value: 120 }, { value: 150 } ];

    // Note: Items 1-5 from prompt map to indices 0-4 here.
    // Item 6 in prompt "Main Sales Chart" is essentially replaced by the new Land Chart logic for item 0,
    // or refers to a generic style we applied to BarChart if it were used.
    
    const chartComponents = [
        // 1. Land: Circular Gauge
        <CircularGauge value="2,000 Ha" label={t('stat1Label')} subLabel={t('statLandAreaManaged')} />,
        
        // 2. Subsidiaries: Large Counter
        <LargeCounter value="02" label={t('stat2Label')} />,
        
        // 3. Employees: Donut Chart
        <DonutChart valueLabel={t('statEmployeesCount')} />,
        
        // 4. Roads: Progress Bar
        <ProgressBar value="200" unit="Km" />,
        
        // 5. Land Base: Sparkline
        <Sparkline data={landBaseData} valueLabel="500 Ha" />
    ];

    return (
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="statisticsSectionHeadline" titleKey="statisticsSectionTitle" />

            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                <div className="lg:col-span-2 flex flex-col gap-y-4">
                     {stats.map((stat, index) => (
                         <div 
                            key={index} 
                            onClick={() => setActiveIndex(index)}
                            className={`h-28 p-4 rounded-lg border flex items-center gap-x-4 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
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
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">{t(`statChartTitle${activeIndex + 1}`)}</h3>
                    <p className="text-sm text-brand-text-gray mb-6">{t(`statChartSubtitle${activeIndex + 1}`)}</p>
                    <div className="flex-grow h-80 flex items-center justify-center">
                      {chartComponents[activeIndex]}
                    </div>
                    {chartInsights[activeIndex] && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-xs text-center text-brand-text-gray italic leading-relaxed">
                                {t(chartInsights[activeIndex])}
                            </p>
                        </div>
                    )}
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
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
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
      <Footer />
    </>
  );
};

export default HomePage;
