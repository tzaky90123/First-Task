
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import FullScreenSection from '../components/FullScreenSection';

// --- Page Sections ---
const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 scroll-element">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-sans text-brand-navy mb-4">{t('minesIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('minesIntroText') }} />
                    <p className="text-lg text-brand-text-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: t('minesIntroParagraph2') }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('minesIntroImageAlt')} className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'minesService1Title', descKey: 'minesService1Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/16/16294.png" alt={t('minesServiceIcon1Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService2Title', descKey: 'minesService2Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/3380/3380304.png" alt={t('minesServiceIcon2Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService3Title', descKey: 'minesService3Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/60/60473.png" alt={t('minesServiceIcon3Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService4Title', descKey: 'minesService4Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/936/936784.png" alt={t('minesServiceIcon4Alt')} className="h-full w-full object-contain" loading="lazy" /> },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="minesServicesTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="group bg-white p-8 rounded-xl shadow-soft text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                        <div className="text-brand-yellow mx-auto mb-6 w-16 h-16 p-3 flex items-center justify-center rounded-full bg-brand-navy/5 transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-navy">{service.icon}</div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3 text-center">{t(service.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm text-center flex-grow">{t(service.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject1Title', descKey: 'minesProject1Desc', tagKey: 'minesProjectTagGold' },
        { image: "https://images.pexels.com/photos/10126780/pexels-photo-10126780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject2Title', descKey: 'minesProject2Desc', tagKey: 'minesProjectTagPhosphates' },
        { image: "https://images.pexels.com/photos/3326129/pexels-photo-3326129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject3Title', descKey: 'minesProject3Desc', tagKey: 'minesProjectTagZircon' },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="minesProjectsTitle" />
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group relative overflow-hidden rounded-lg shadow-lg h-[400px]">
                        <img src={p.image} alt={t(p.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <span className="inline-block px-3 py-1 bg-brand-secondary text-white text-xs font-bold rounded-full mb-3">{t(p.tagKey)}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{t(p.titleKey)}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2">{t(p.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SafetySection: React.FC = () => {
    const { t } = useLocalization();
    const points = [
        { 
            titleKey: 'minesSafetyPoint1Title', 
            descKey: 'minesSafetyPoint1Desc', 
            icon: (
                <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        { 
            titleKey: 'minesSafetyPoint2Title', 
            descKey: 'minesSafetyPoint2Desc',
             icon: (
                <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                     {/* Using a shield-like leaf concept for rehabilitation/protection */}
                </svg>
            )
        },
        { 
            titleKey: 'minesSafetyPoint3Title', 
            descKey: 'minesSafetyPoint3Desc',
             icon: (
                <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold font-sans text-brand-navy mb-2 uppercase">{t('minesSafetyTitle')}</h2>
                 <p className="text-brand-text-gray">{t('minesSafetyText')}</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Left: Image */}
                <div className="relative">
                     <img src="https://images.pexels.com/photos/12745330/pexels-photo-12745330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('minesSafetyImageAlt')} className="rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" />
                </div>

                {/* Right: List */}
                <div className="space-y-8">
                    {points.map((point, index) => (
                        <div key={point.titleKey} className="flex items-start group">
                             <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mr-6 shadow-sm transition-colors duration-300 group-hover:bg-brand-yellow">
                                {/* Icon */}
                                {point.icon}
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold text-brand-navy mb-1">{t(point.titleKey)}</h4>
                                 <p className="text-brand-text-gray">{t(point.descKey)}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center scroll-element">
            <SectionTitle titleKey="minesCtaTitle" descriptionKey="minesCtaText" />
            <Link to="/contact" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                {t('minesCtaButton')}
            </Link>
        </div>
    );
};

const MinesPage: React.FC = () => {
  const { t } = useLocalization();
  const minesSlides = [
    {
      img: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesHeroSlide1Title',
      subtitle: 'minesHeroSlide1Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesHeroSlide2Title',
      subtitle: 'minesHeroSlide2Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesHeroSlide3Title',
      subtitle: 'minesHeroSlide3Subtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={minesSlides} />
      <FullScreenSection className="bg-brand-light py-16 md:py-20"><IntroductionSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><ServicesSection /></FullScreenSection>
      <FullScreenSection className="grid-bg py-16 md:py-20"><ProjectsSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20"><SafetySection /></FullScreenSection>
      <FullScreenSection className="bg-brand-warm-light py-16 md:py-20"><CtaSection /></FullScreenSection>
      <Footer />
    </>
  );
};

export default MinesPage;
