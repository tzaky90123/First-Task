
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
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-sans text-brand-navy mb-6">{t('minesIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('minesIntroText').replace('stimulant ainsi la croissance économique', '<strong>stimulant ainsi la croissance économique</strong>') }} />
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
        <div className="container mx-auto px-6">
            <SectionTitle titleKey="minesServicesTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className={`group bg-white p-8 rounded-xl shadow-soft text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}>
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
        { image: "https://images.pexels.com/photos/2555627/pexels-photo-2555627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject1Title', descKey: 'minesProject1Desc', tag: t('minesProjectTagGold') },
        { image: "https://images.pexels.com/photos/2533084/pexels-photo-2533084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject2Title', descKey: 'minesProject2Desc', tag: t('minesProjectTagPhosphates') },
        { image: "https://images.pexels.com/photos/12971169/pexels-photo-12971169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject3Title', descKey: 'minesProject3Desc', tag: t('minesProjectTagZircon') },
    ];
    return (
        <div className="container mx-auto px-6">
            <SectionTitle titleKey="minesProjectsTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className={`group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                        <div className="relative overflow-hidden">
                            <img src={p.image} alt={t(p.titleKey)} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width="400" height="240" />
                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-navy text-xs font-bold uppercase px-3 py-1 rounded-full">{p.tag}</div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-yellow transition-colors duration-300">{t(p.titleKey)}</h3>
                            <p className="text-brand-text-gray text-sm flex-grow">{t(p.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SafetyEnvironmentSection: React.FC = () => {
    const { t } = useLocalization();
    const commitments = [
        { titleKey: 'minesSafetyPoint1Title', descKey: 'minesSafetyPoint1Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/3329/3329048.png" alt={t('minesSafetyPoint1Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'minesSafetyPoint2Title', descKey: 'minesSafetyPoint2Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/5631/5631194.png" alt={t('minesSafetyPoint2Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'minesSafetyPoint3Title', descKey: 'minesSafetyPoint3Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/52/52066.png" alt={t('minesSafetyPoint3Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <SectionTitle titleKey="minesSafetyTitle" descriptionKey="minesSafetyText" />
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('minesSafetyImageAlt')} className="rounded-xl shadow-2xl w-full" loading="lazy" width="576" height="384"/>
                </div>
                <div className="space-y-8">
                    {commitments.map((item, index) => (
                        <div key={item.titleKey} className={`flex items-start group`}>
                            <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110">{item.icon}</div>
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

const TechnologySection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="relative container mx-auto px-6 py-20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5696144/pexels-photo-5696144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
            <div className="absolute inset-0 bg-brand-navy opacity-80 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <SectionTitle titleKey="minesTechTitle" descriptionKey="minesTechText" variant="light" />
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 max-w-3xl text-center">
             <SectionTitle titleKey="minesTestimonialsTitle" />
             <div className="bg-white p-10 rounded-xl shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                </div>
                <blockquote className="text-xl text-brand-text-gray italic leading-relaxed mt-8 mb-6">“{t('minesTestimonial1Quote')}”</blockquote>
                <cite className="not-italic font-semibold text-brand-navy font-sans">— {t('minesTestimonial1Name')}</cite>
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center">
            <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                <SectionTitle titleKey="minesCtaTitle" descriptionKey="minesCtaText" />
                <Link to="/contact" className="bg-brand-yellow text-brand-navy text-lg font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('minesCtaButton')}
                </Link>
            </div>
        </div>
    );
};

const MinesPage: React.FC = () => {
  const { t } = useLocalization();
  const minesSlides = [
    {
      img: 'https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesHeroTitle',
      subtitle: 'minesHeroSubtitle',
    },
    {
      img: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesServicesTitle',
      subtitle: 'minesHeroServicesSubtitle',
    },
    {
      img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesProjectsTitle',
      subtitle: 'minesHeroProjectsSubtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={minesSlides} />
      <section className="bg-white py-20 md:py-28"><IntroductionSection /></section>
      <FullScreenSection className="blueprint-bg py-20 md:py-28"><ServicesSection /></FullScreenSection>
      <FullScreenSection className="bg-white py-20 md:py-28"><ProjectsSection /></FullScreenSection>
      <section className="bg-gray-50 py-20 md:py-28"><SafetyEnvironmentSection /></section>
      <section className="bg-white py-20 md:py-28"><TechnologySection /></section>
      <section className="blueprint-bg py-20 md:py-28"><TestimonialsSection /></section>
      <section className="grid-bg py-20 md:py-28"><CtaSection /></section>
      <Footer />
    </>
  );
};

export default MinesPage;